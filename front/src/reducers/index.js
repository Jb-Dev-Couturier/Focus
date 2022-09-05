import {combineReducers } from 'redux'
import usersReducer from './users.reducer';
import authReducer from './AuthReducer';



export default combineReducers({
  usersReducer,
  authReducer,
});