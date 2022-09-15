import axios from 'axios';

export const GET_USER = 'GET_USER';
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE';
export const UPDATE_BIO = 'UPDATE_BIO';
export const UPDATE_WORK = 'UPDATE_WORK';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_ISBAN = 'UPDATE_ISBAN';

export const GET_USER_ERRORS = 'GET_USER_ERRORS';

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}user/${uid}`
      );
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const uploadPicture = (data, id) => {
  return async (dispatch) => {
    return await axios
      .post(`${process.env.REACT_APP_API_URL}uploadprofil`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_USER_ERRORS, payload: '' });
          return axios
            .get(`${process.env.REACT_APP_API_URL}user/${id}`)
            .then((res) => {
              dispatch({
                type: UPLOAD_PICTURE,
                payload: res.data.profilePicture,
              });
            });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId, bio) => {
  return async (dispatch) => {
    return await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}user/` + userId,
      data: { bio },
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};
export const isBan = (userId, isBanished) => {
  return async (dispatch) => {
    return await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}user/` + userId,
      data: { isBanished },
    })
      .then((res) => {
        dispatch({ type: UPDATE_ISBAN, payload: isBanished });
      })
      .catch((err) => console.log(err));
  };
};

export const updateWorkAt = (userId, worksAt) => {
  return async (dispatch) => {
    return await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}user/` + userId,
      data: { worksAt },
    })
      .then((res) => {
        dispatch({ type: UPDATE_WORK, payload: worksAt });
      })
      .catch((err) => console.log(err));
  };
};


export const followUser = (followerId, IdToFollow) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}user/follow/` + followerId,
        data: { IdToFollow },
      });
      dispatch({ type: FOLLOW_USER, payload: { IdToFollow } });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const unfollowUser = (followerId, IdToUnfollow) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}user/unfollow/` + followerId,
        data: { IdToUnfollow },
      });
      dispatch({ type: UNFOLLOW_USER, payload: { IdToUnfollow } });
    } catch (err) {
      return console.log(err);
    }
  };
};


export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}user/${userId}`,
      });
      dispatch({ type: DELETE_USER, payload: { userId } });
    } catch (err) {
      return console.log(err);
    }
  };
};
