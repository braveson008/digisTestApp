import { combineReducers } from 'redux';

import forecast from './reducer';

const reducers = {
  forecast,
};

const reducer = combineReducers(reducers);

export default reducer;
