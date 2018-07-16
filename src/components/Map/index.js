import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import amaps from '../../static/amaps.iife';

import './style.scss';

const PREVIEW_ZOOM_LEVEL = 16;

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latlng: props.latlng,
    };
  }

  componentDidMount() {
    const options = {
      layer: 'standaard',
      target: 'mapdiv',
      marker: true,
      search: false,
      zoom: PREVIEW_ZOOM_LEVEL
    };

    this.map = amaps.createMap(options);
  }

  componentWillReceiveProps(props) {
    if (!isEqual(props.latlng, this.props.latlng)) {
      const latlng = new window.L.LatLng(props.latlng.latitude, props.latlng.longitude);
      this.map.then((map) => {
        map.setView(latlng, PREVIEW_ZOOM_LEVEL);
      });
    }
  }

  render() {
    return (
      <div className="map-component">
        <div className="row">
          <div className="col-12">
            <div className="map">
              <div id="mapdiv" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Map.defaultProps = {
  latlng: {}
};

Map.propTypes = {
  latlng: PropTypes.object
};

export default Map;
