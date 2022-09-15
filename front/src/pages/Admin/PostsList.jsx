import React from 'react';
import LeftNavAdmin from '../../components/Admin/LeftNavAdmin';
import MainPostList from '../../components/Admin/PostCard/MainPostList';

const PostsList = () => {
  return (
    <>
      <LeftNavAdmin />
      <div className="PostsList">
        <div className="adminGlass">
          <MainPostList />
        </div>
      </div>
    </>
  );
};

export default PostsList;
