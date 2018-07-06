import {
  REQUEST_STATUS_LIST, REQUEST_STATUS_LIST_SUCCESS, REQUEST_STATUS_LIST_ERROR,
  REQUEST_STATUS_CREATE, REQUEST_STATUS_CREATE_SUCCESS, REQUEST_STATUS_CREATE_ERROR
}
  from './constants';

export function requestsStatusList(signalId) {
  return {
    type: REQUEST_STATUS_LIST,
    payload: signalId
  };
}

export function requestsStatusListSuccess(statusList) {
  return {
    type: REQUEST_STATUS_LIST_SUCCESS,
    payload: statusList
  };
}

export function requestStatusListError(message) {
  return {
    type: REQUEST_STATUS_LIST_ERROR,
    payload: message
  };
}

export function requestStatusCreate(status) {
  return {
    type: REQUEST_STATUS_CREATE,
    payload: status
  };
}

export function requestStatusCreateSuccess(status) {
  return {
    type: REQUEST_STATUS_CREATE_SUCCESS,
    payload: status
  };
}

export function requestStatusCreateError(message) {
  return {
    type: REQUEST_STATUS_CREATE_ERROR,
    payload: message
  };
}
