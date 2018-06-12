/**
 *
 * IncidentContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectIncidentContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import './style.scss';

import IncidentWizard from '../../components/IncidentWizard/Loadable';

function IncidentContainer({ match }) {
  return (
    <div className="incident-container">
      <IncidentWizard match={match} />
    </div>
  );
}

IncidentContainer.propTypes = {
  match: PropTypes.object
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  incidentcontainer: makeSelectIncidentContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'incidentContainer', reducer });
const withSaga = injectSaga({ key: 'incidentContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(IncidentContainer);