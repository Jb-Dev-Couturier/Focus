import {combineReducers } from 'redux'
import usersReducer from './users.reducer';
import authReducer from './AuthReducer';
import userReducer from './user.reducer';
import postReducer from './post.reducer';
import errorReducer from './error.reducer';
import allPostsReducer from './allPosts.reducers';
import trendingReducer from './trending.reducer';



export default combineReducers({
  usersReducer,
  authReducer,
  userReducer,
  postReducer,
  allPostsReducer,
  errorReducer,
  trendingReducer,
});