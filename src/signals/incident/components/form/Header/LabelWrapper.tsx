import React from 'react';
import styled from 'styled-components';
import { themeColor, themeSpacing } from '@amsterdam/asc-ui';

const Label = styled.label`
  display: block;
  font-family: Avenir Next LT W01 Demi;
  margin-bottom: ${themeSpacing(2)};
`;

const Optional = styled.span`
  font-family: Avenir Next LT W01-Regular;
  margin-left: ${themeSpacing(2)};
`;

const SubTitle = styled.div`
  color: ${themeColor('tint', 'level5')};
  margin-top: ${themeSpacing(-1)};
  margin-bottom: ${themeSpacing(2)};
`;

const FieldSet = styled.fieldset`
  border: 0;
  padding: 0;
  margin-top: ${themeSpacing(-1)};

  legend {
    font-family: Avenir Next LT W01 Demi;
    margin-bottom: ${themeSpacing(2)};
  }
`;

interface LabelWrapperProps {
  isFieldSet: boolean;
  isOptional?: boolean;
  label?: string;
  subtitle?: string;
  inputId?: string;
}

const LabelWrapper: React.FC<LabelWrapperProps> = ({ children, isFieldSet, inputId, label, subtitle, isOptional }) => {
  if (isFieldSet) {
    return (
      <FieldSet>
        <legend>
          {label}
          {isOptional && <Optional>(optioneel)</Optional>}
        </legend>
        {subtitle && <SubTitle id={inputId && `${inputId}-subtitle`}>{subtitle}</SubTitle>}
        {children}
      </FieldSet>
    );
  }

  return (
    <React.Fragment>
      {label && <Label htmlFor={inputId}>
        {label}
        {isOptional && <Optional>(optioneel)</Optional>}
      </Label>
      }
      {subtitle && <SubTitle id={inputId && `${inputId}-subtitle`}>{subtitle}</SubTitle>}
      {children}
    </React.Fragment>
  );
};

export default LabelWrapper;
