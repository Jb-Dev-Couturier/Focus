import {combineReducers } from 'redux'
import usersReducer from './users.reducer';
import authReducer from './AuthReducer';
import userReducer from './user.reducer';



export default combineReducers({
  usersReducer,
  authReducer,
  userReducer,
});