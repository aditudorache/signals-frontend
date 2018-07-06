import { put, takeLatest } from 'redux-saga/effects';
import { authCall, authPostCall } from '../../../../shared/services/api/api';

import { REQUEST_STATUS_LIST, REQUEST_STATUS_CREATE } from './constants';
import { requestStatusListSuccess, requestStatusListError, requestStatusCreateSuccess, requestStatusCreateError } from './actions';

// const baseURL = '/api/auth/auth/status';
const baseUrl = 'https://acc.api.data.amsterdam.nl/signals/auth/status';

export function* fetchIncidentStatusList(action) {
  const signalId = action.payload;
  const requestURL = `${baseUrl}`;

  try {
    const incidentStatusList = yield authCall(requestURL, { _signal__id: signalId });
    yield put(requestStatusListSuccess(incidentStatusList));
  } catch (error) {
    yield put(requestStatusListError(error));
  }
}

export function* createIncidentStatus(action) {
  const status = action.payload;
  const requestURL = `${baseUrl}`;

  try {
    const updatedStatus = yield authPostCall(requestURL, status);
    yield put(requestStatusCreateSuccess(updatedStatus));
  } catch (error) {
    yield put(requestStatusCreateError(error));
  }
}

export default function* watchRequestIncidentsSaga() {
  yield [
    takeLatest(REQUEST_STATUS_LIST, fetchIncidentStatusList),
    takeLatest(REQUEST_STATUS_CREATE, createIncidentStatus)
  ];
}
