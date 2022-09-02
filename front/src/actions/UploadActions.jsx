import * as UploadApi from '../api/UploadRequest';

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log('Image upload Action');
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatch({ type: 'UPLOAD_SUCCESS', payload: newPost.data });
  } catch (error) {
    console.log(error);
  }
};
