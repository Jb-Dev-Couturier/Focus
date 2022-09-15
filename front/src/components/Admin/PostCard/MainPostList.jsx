import React from 'react'
import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { isEmpty } from '../../Utils';
import CardPost from './CardPost';


const MainPostList = () => {
  const posts = useSelector((state) => state.allPostsReducer);
  return (
    <div className="MainUserList">
      <div className="Header">
        <h1>Liste Des Post</h1>
        <h3>
          Supprimer les posts en appuyant sur <DeleteOutlineOutlinedIcon />
        </h3>
      </div>
      <div className="cardUser-container">
        <ul>
          {!isEmpty(posts[0]) &&
            posts.map((post) => (
              <div className="parentContainer" key={post._id}>
                <CardPost post={post} key={post._id} />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPostList