import actionTypes from './actionTypes';

export const SET_API_RESULT = (information) => ({
  type: actionTypes.SET_API_RESULT,
  information,
});

export const SET_API_ERROR = (message) => ({
  type: actionTypes.SET_API_ERROR,
  message,
});
