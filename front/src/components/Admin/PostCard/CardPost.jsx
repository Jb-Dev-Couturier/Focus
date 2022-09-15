import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../../actions/post.actions';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

import { isEmpty, timestampParser } from '../../Utils';
import DeleteCard from '../../public/Post/DeleteCard';


const CardPost = ({post}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    !isEmpty(usersData[0]) &&
    usersData.map((user) => {
      if (user._id === post.posterId) {
        return user.isBanished ? null : (
          <li className="card-container" key={post._id}>
            {isLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                <div className="card-left">
                  <img
                    src={
                      !isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === post.posterId) {
                            return user.profilePicture
                              ? PF + user.profilePicture
                              : PF + 'defaultProfile.png';
                          } else {
                            return null;
                          }
                        })
                        .join('')
                    }
                    alt="poster-pic"
                  />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>
                        {!isEmpty(usersData[0]) &&
                          usersData
                            .map((user) => {
                              if (user._id === post.posterId) {
                                return user.pseudo;
                              } else return null;
                            })
                            .join('')}
                      </h3>
                    </div>
                    <span>{timestampParser(post.createdAt)}</span>
                  </div>
                  {isUpdated === false && <p>{post.message}</p>}
                  {isUpdated && (
                    <div className="update-post">
                      <textarea
                        defaultValue={post.message}
                        onChange={(e) => setTextUpdate(e.target.value)}
                      />
                      <div className="button-container">
                        <button className="btn" onClick={updateItem}>
                          Valider modification
                        </button>
                      </div>
                    </div>
                  )}
                  {post.picture && (
                    <img
                      src={post.picture ? PF + post.picture : ''}
                      alt="card-pic"
                      className="card-pic"
                      style={{ width: '100px' }}
                    />
                  )}
                  {(userData._id === post.posterId ||
                    userData.isAdmin === true) && (
                    <div className="button-container">
                      <div onClick={() => setIsUpdated(!isUpdated)}>
                        <ModeEditOutlinedIcon />
                      </div>
                      <DeleteCard id={post._id} />
                    </div>
                  )}
                </div>
              </>
            )}
          </li>
        );
      } else return null;
    })
  );
};

export default CardPost;
