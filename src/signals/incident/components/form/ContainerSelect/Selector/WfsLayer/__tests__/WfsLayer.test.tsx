import type { FunctionComponent, ReactNode } from 'react';
import React, { useContext } from 'react';
import type { MapOptions } from 'leaflet';

import { render, screen } from '@testing-library/react';
import type { FetchMock } from 'jest-fetch-mock';
import type { FeatureCollection } from 'geojson';

import { Map } from '@amsterdam/react-maps';
import containersJson from 'utils/__tests__/fixtures/containers.json';
import MAP_OPTIONS from 'shared/services/configuration/map-options';
import type { DataLayerProps } from '../../../types';
import WfsDataContext, { NO_DATA } from '../context';
import WfsLayer from '../WfsLayer';
import * as useLayerVisible from '../../useLayerVisible';


const fetchMock = fetch as FetchMock;

const options = {
  ...MAP_OPTIONS,
  center: [52.37309068742423, 4.879893985747362],
  zoom: 14,
} as MapOptions;

const withMapContainer = (Component: ReactNode) => (
  <Map data-testid="map-test" options={options}>
    {Component}
  </Map>
);

describe('src/signals/incident/components/form/ContainerSelect/WfsLayer', () => {
  const setContextData = jest.fn();
  const TestLayer: FunctionComponent<DataLayerProps> = () => {
    const data = useContext<FeatureCollection>(WfsDataContext);
    setContextData(data);

    return <span data-testid="test-layer"></span>;
  };

  beforeEach(() => {
    jest.spyOn(useLayerVisible, 'default').mockImplementation(() => true);
    fetchMock.resetMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should not render when outside zoom level does not allow it', () => {
    fetchMock.mockResponseOnce(JSON.stringify(containersJson), { status: 200 });
    jest.spyOn(useLayerVisible, 'default').mockImplementation(() => false);
    render(
      withMapContainer(
        <WfsLayer zoomLevel={{ max: 15 }}>
          <TestLayer featureTypes={[]} />
        </WfsLayer>
      )
    );

    expect(screen.getByTestId('map-test')).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('should render the wfs layer in the map', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(containersJson), { status: 200 });

    render(
      withMapContainer(
        <WfsLayer zoomLevel={{ max: 12 }}>
          <TestLayer featureTypes={[]} />
        </WfsLayer>
      )
    );

    await screen.findByTestId('map-test');
    expect(setContextData).toHaveBeenCalledWith(containersJson);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('should not render when an AbortError occurs in the wfs call', () => {
    const error = new Error();
    error.name = 'AbortError';
    fetchMock.mockRejectOnce(error);
    render(
      withMapContainer(
        <WfsLayer>
          <TestLayer featureTypes={[]} />
        </WfsLayer>
      )
    );

    expect(setContextData).toHaveBeenCalledWith(NO_DATA);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('should console.error when other error occurs in the wfs call', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const error = new Error();
    error.name = 'OtherError';
    fetchMock.mockRejectOnce(error);
    render(
      withMapContainer(
        <WfsLayer>
          <TestLayer featureTypes={[]} />
        </WfsLayer>
      )
    );

    await screen.findByTestId('map-test');
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockClear();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});