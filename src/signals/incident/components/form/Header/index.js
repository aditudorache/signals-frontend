import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeSpacing, themeColor } from '@amsterdam/asc-ui';

import LabelWrapper from './LabelWrapper';

const Children = styled.div`
  display: flex;
  flex-flow: column;
`;

const Wrapper = styled.div`
  ${({ invalid }) =>
    invalid &&
    css`
      border-left: ${themeColor('support', 'invalid')} 2px solid;
      padding-left: ${themeSpacing(3)};
    `}
`;

const ErrorItem = styled.div`
  color: ${themeColor('support', 'invalid')};
  font-size: 14px;
  margin-bottom: ${themeSpacing(1)};
`;

const Header = ({ className, meta, options, touched, hasError, getError, isFieldSet, children }) => {
  const containsErrors =
    touched && (hasError('required') || hasError('email') || hasError('maxLength') || hasError('custom'));
  const isOptional = !options?.validators?.some(validator => validator.name === 'required');

  return (
    <Wrapper className={className} invalid={containsErrors}>
      <LabelWrapper isFieldSet={isFieldSet} label={meta.label} isOptional={isOptional} inputId={meta.name}>
        {touched && containsErrors && (
          <Fragment>
            {hasError('required') && (
              <ErrorItem>
                {getError('required') === true ? 'Dit is een verplicht veld' : getError('required')}
              </ErrorItem>
            )}

            {hasError('email') && (
              <ErrorItem>
                Vul een geldig e-mailadres in, met een @ en een domeinnaam. Bijvoorbeeld: naam@domein.nl
              </ErrorItem>
            )}

            {hasError('maxLength') && (
              <ErrorItem>
                U heeft meer dan de maximale {getError('maxLength').requiredLength} tekens ingevoerd
              </ErrorItem>
            )}

            {hasError('custom') && <ErrorItem>{getError('custom')}</ErrorItem>}
          </Fragment>
        )}

        <Children>{children}</Children>
      </LabelWrapper>
    </Wrapper>
  );
};

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.shape({
    label: PropTypes.string,
    subtitle: PropTypes.string,
    name: PropTypes.string,
  }),
  options: PropTypes.shape({
    validators: PropTypes.arrayOf(PropTypes.any),
  }),
  touched: PropTypes.bool,
  /** If true, label is rendered as a legend to a fieldset */
  isFieldSet: PropTypes.bool,
  hasError: PropTypes.func.isRequired,
  getError: PropTypes.func,
  children: PropTypes.node,
};

export default Header;
