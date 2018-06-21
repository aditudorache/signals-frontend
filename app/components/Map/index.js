import React from 'react';
import PropTypes from 'prop-types';
import amaps from '../../static/amaps.es';
import { wgs84ToRd } from './crs-converter';

import './style.scss';

import MarkerIcon from '../../../node_modules/stijl/dist/images/svg/marker.svg';

class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static requestFormatter(baseUrl, xy) {
    const xyRd = wgs84ToRd(xy);
    return `${baseUrl}${xyRd.x},${xyRd.y},50`;
    // return "" + baseUrl + xyRd.x + "," + xyRd.y + ",50";
  }

  static responseFormatter(res) {
    const filtered = res.results.filter((x) =>
      x.hoofdadres === true
    );
    return filtered.length > 0 ? filtered[0] : null;
  }

  constructor(props) {
    super(props);
    this.onMapClick = this.onMapClick.bind(this);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    const Marker = new window.L.icon({ // eslint-disable-line new-cap
      iconUrl: MarkerIcon,
      iconSize: [40, 40],
      iconAnchor: [20, 39]
    });
    window.L.Marker.prototype.options.icon = Marker;
    window.L.icon.Default = Marker;

    this.map = amaps.createMap({
      style: 'standaard',
      target: 'mapdiv',
      marker: false,
      search: true,
      zoom: 14
    });

    const clicks = amaps.clickProvider(this.map);
    const singleMarker = amaps.singleMarker(this.map);
    const featureQuery = amaps.queryFeatures(
      clicks,
      'https://api.data.amsterdam.nl/bag/nummeraanduiding/?format=json&locatie=',
      Map.requestFormatter,
      Map.responseFormatter
    );
    clicks.subscribe(singleMarker);
    featureQuery.subscribe(this.onMapClick);


    this.map.on('moveend', () => {
      this.removeMarkerOnSearch();
      this.setMarkerOnSearch();
    });
  }

  componentDidUpdate() {
    if (!this.inputField) {
      this.inputField = document.querySelector('#nlmaps-geocoder-control-input');
    }
    this.inputField.value = this.props.location;
  }

  onMapClick(t, data) {
    if (t === 1) {
      this.removeMarkerOnSearch();
      this.setState({
        isLoading: true
      });
      if (data.queryResult) {
        this.onLocationChange(
          data.queryResult._display, // eslint-disable-line no-underscore-dangle
          data.latlng
        );
        this.setState({
          isLoading: false
        });
      } else {
        // fetch nearby object if no address is found
        fetch(`https://acc.api.data.amsterdam.nl/geosearch/atlas/?lat=${data.latlng.lat}&lon=${data.latlng.lng}&radius=0`)
        .then((res) => res.json())
        .then((res) => {
          this.onLocationChange(
            res.features[0].properties.display,
            data.latlng
          );
          this.setState({
            isLoading: false
          });
        });
      }
    }
  }

  onLocationChange(location, latlng) {
    this.props.onLocationChange(location, latlng);
  }

  setMarkerOnSearch() {
    const latlng = window.L.latLng(this.map.getCenter());
    this.markerOnSearch = window.L.marker(latlng).addTo(this.map);
  }

  removeMarkerOnSearch() {
    if (this.markerOnSearch) {
      this.map.removeLayer(this.markerOnSearch);
    }
  }

  render() {
    return (
      <div className="map-component">
        <div className="row">
          <div className="col-12">
            { this.state.isLoading && (
              <span className="map-component__loading">
                <div className="progress-wrapper">
                  <div className="progress-indicator progress-red"></div>
                  <div className="progress-txt">Laden...</div>
                </div>
              </span>
            )}
            <div className="map">
              <div id="mapdiv">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
  location: PropTypes.string
};

Map.defaultProps = {
  location: ''
};

export default Map;
