import actionTypes from './actionTypes';

const INITIAL_STATE = {
  API_RESULT: null,
  API_ERROR: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_API_RESULT:
      return {
        ...state,
        API_RESULT: action.information,
      };
    case actionTypes.SET_API_ERROR:
      return {
        ...state,
        API_ERROR: action.message,
      };
    default:
      return state;
  }
};
