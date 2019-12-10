import { fromJS } from 'immutable';
import {
  REQUEST_INCIDENTS_ERROR,
  REQUEST_INCIDENTS_SUCCESS,
  REQUEST_INCIDENTS,
  RESET_SEARCH_INCIDENTS,
  SEARCH_INCIDENTS,
} from './constants';

export const initialState = fromJS({
  error: false,
  errorMessage: undefined,
  incidents: [],
  incidentsCount: null,
  loading: false,
  searchQuery: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INCIDENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage', undefined);

    case REQUEST_INCIDENTS_SUCCESS:
      return state
        .set('incidents', fromJS(action.payload.results))
        .set('incidentsCount', action.payload.count)
        .set('loading', false)
        .set('error', false)
        .set('errorMessage', undefined);

    case REQUEST_INCIDENTS_ERROR:
      return state
        .set('error', true)
        .set('errorMessage', action.payload)
        .set('loading', false);

    case SEARCH_INCIDENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage', undefined)
        .set('searchQuery', action.payload);

    case RESET_SEARCH_INCIDENTS:
      return state.set('searchQuery', '');

    default:
      return state;
  }
};
