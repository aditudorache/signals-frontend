import React from 'react';
import PropTypes from 'prop-types';


import { string2date, string2time } from 'shared/services/string-parser/string-parser';
import { getListValueByKey } from 'shared/services/list-helper/list-helper';
import './style.scss';

class List extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { incidentStatusList, statusList } = this.props;
    return (
      <div className="incident-status-container-list">
        <div className="incident-status-container-list__body">
          <table className="incident-status-container-list__body-list" cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th className="">Datum</th>
                <th className="">Tijd</th>
                <th className="">Status</th>
                <th className="">Omschrijving</th>
                <th className="">Gebruiker</th>
              </tr>
            </thead>
            <tbody>
              {incidentStatusList.map((item) => (
                <tr key={item.id}>
                  <td>{string2date(item.created_at)}</td>
                  <td>{string2time(item.created_at)}</td>
                  <td>{getListValueByKey(statusList, item.state)}</td>
                  <td>{item.text}</td>
                  <td>{item.user}</td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  incidentStatusList: PropTypes.array.isRequired,
  statusList: PropTypes.array.isRequired
};

List.defaultProps = {
  incidentStatusList: [],
  statusList: []
};

export default List;
