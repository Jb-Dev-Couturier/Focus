import {
  GET_USER,
  UPLOAD_PICTURE,
  UPDATE_BIO,
  UPDATE_WORK,
  FOLLOW_USER,
  UNFOLLOW_USER,
  DELETE_USER,
} from '../actions/user.actions';

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        profilePicture: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case UPDATE_WORK:
      return {
        ...state,
        worksAt: action.payload,
      };
    case FOLLOW_USER:
      return {
        ...state,
        following: [action.payload.IdToFollow, ...state.following],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(
          (id) => id !== action.payload.IdToUnfollow
        ),
      };
    case DELETE_USER:
      return action.payload;
    default:
      return state;
  }
}
