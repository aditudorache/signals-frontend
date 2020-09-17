import React from 'react';
import { render } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';
import * as reactRedux from 'react-redux';
import configuration from 'shared/services/configuration/configuration';
import { history, withAppContext } from 'test/utils';
import { act } from 'react-dom/test-utils';
import { setClassification } from 'signals/incident/containers/IncidentContainer/actions';
import IncidentClassification from '.';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
}));

describe('signals/incident/components/IncidentClassification', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => dispatch);

    fetch.resetMocks();
    dispatch.mockReset();
  });

  it('sets the category and subcategory', async() => {
    const category = 'foo';
    const subcategory = 'bar';
    jest.spyOn(reactRouterDom, 'useParams').mockImplementation(() => ({ category: 'foo', subcategory: 'bar' }));

    fetch.mockResponseOnce(JSON.stringify({ }));

    act(() => history.push('/initial-location'));

    const { findByTestId } = render(withAppContext(<IncidentClassification />));

    expect(fetch).toHaveBeenCalledWith(`${configuration.CATEGORIES_ENDPOINT}${category}/sub_categories/${subcategory}`, expect.objectContaining({
      method: 'GET',
    }));

    await findByTestId('loadingIndicator');
    expect(dispatch).toHaveBeenCalledWith(setClassification({ category, subcategory }));
    expect(history.location.pathname).toEqual('/');
  });

  it('doesn\'t set the category and subcategory when an error occurs', async() => {
    const category = 'foo';
    const subcategory = 'bar';
    jest.spyOn(reactRouterDom, 'useParams').mockImplementation(() => ({ category: 'foo', subcategory: 'bar' }));

    fetch.mockRejectOnce(new Error());

    act(() => history.push('/aaa'));

    const { findByTestId } = render(withAppContext(<IncidentClassification />));

    expect(fetch).toHaveBeenCalledWith(`${configuration.CATEGORIES_ENDPOINT}${category}/sub_categories/${subcategory}`, expect.objectContaining({
      method: 'GET',
    }));

    await findByTestId('loadingIndicator');
    expect(dispatch).not.toHaveBeenCalled();
    expect(history.location.pathname).toEqual('/');
  });

  it('doesn\'t set the category and subcategory when a bad request is done', async () => {
    const category = 'foo';
    const subcategory = 'bar';
    jest.spyOn(reactRouterDom, 'useParams').mockImplementation(() => ({ category: 'foo', subcategory: 'bar' }));

    fetch.mockRejectOnce(new Error());

    fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });
    act(() => history.push('/before-400'));

    const { findByTestId } = render(withAppContext(<IncidentClassification />));

    expect(fetch).toHaveBeenCalledWith(`${configuration.CATEGORIES_ENDPOINT}${category}/sub_categories/${subcategory}`, expect.objectContaining({
      method: 'GET',
    }));

    await findByTestId('loadingIndicator');
    expect(dispatch).not.toHaveBeenCalled();
    expect(history.location.pathname).toEqual('/');

    fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });
  });

  it('doesn\'t set the category and subcategory when an internal server error occurs', async () => {
    const category = 'foo';
    const subcategory = 'bar';
    jest.spyOn(reactRouterDom, 'useParams').mockImplementation(() => ({ category: 'foo', subcategory: 'bar' }));

    fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });

    act(() => history.push('/before-500'));

    const { findByTestId } = render(withAppContext(<IncidentClassification />));

    expect(fetch).toHaveBeenCalledWith(`${configuration.CATEGORIES_ENDPOINT}${category}/sub_categories/${subcategory}`, expect.objectContaining({
      method: 'GET',
    }));

    await findByTestId('loadingIndicator');
    expect(dispatch).not.toHaveBeenCalled();
    expect(history.location.pathname).toEqual('/');
  });
});
