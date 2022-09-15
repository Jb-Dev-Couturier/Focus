import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isBan } from '../../../actions/user.actions';
import { getUsers } from '../../../_services/users.actions';

import { isEmpty, timestampParser } from '../../Utils';

const CardUser = ({ userinfo }) => {
  const [isLoading, setIsLoading] = useState();
  const usersData = useSelector((state) => state.usersReducer);
  
  const [banned, setbanned] = useState(userinfo.isBanished);
  const dispatch = useDispatch();
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const handleUpdateisBan = ()=>{
    setbanned((prev)=>!prev)
    dispatch(isBan(userinfo._id, banned));
    dispatch(getUsers());
    
  }

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);
  return (
    <>
      {userinfo.isAdmin === false && (
        <li
          className={
            userinfo.isBanished
              ? 'card-container-user bannished-card'
              : 'card-container-user valid-card'
          }
          key={userinfo._id}
        >
          {isLoading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <>
              <div className="card-left-user">
                <img
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === userinfo._id) {
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
              <div className="card-right-user">
                <div className="card-header-user">
                  <div className="pseudo-user">
                    <h3>
                      Pseudo :
                      {!isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === userinfo._id) return user.pseudo;
                            else return null;
                          })
                          .join('')}
                    </h3>

                    <h4>
                      {!isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === userinfo._id) return user.username;
                            else return null;
                          })
                          .join('')}
                    </h4>
                    <span className="membres">
                      Membres depuis : le {timestampParser(userinfo.createdAt)}
                    </span>
                  </div>

                  {!userinfo.isBanished && (
                    <span onClick={handleUpdateisBan} className="BanishedUser">
                      {!isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === userinfo._id) {
                              return 'actif';
                            } else return null;
                          })
                          .join('')}
                    </span>
                  )}
                  {userinfo.isBanished && (
                    <span onClick={handleUpdateisBan} className="BanishedUser">
                      {!isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === userinfo._id) {
                              return 'Banni';
                            } else return null;
                          })
                          .join('')}
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </li>
      )}
    </>
  );
};

export default CardUser;
