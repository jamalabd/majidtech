import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authenticationReducer,
  err: errorReducer,
});
