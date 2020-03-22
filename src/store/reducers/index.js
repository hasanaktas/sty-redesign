import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
  session: sessionReducer,
  auth: authReducer,
});

export default rootReducer;
