import React, { useEffect, useState } from 'react';
import {useSelector } from 'react-redux';

import { isEmpty, timestampParser } from '../../Utils';


const CardUser = ({ userinfo }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);



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
                        if (user._id === userinfo._id)
                          return user.profilePicture;
                        else return null;
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
                  <span className='BanishedUser'>
                    {!isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === userinfo._id) {
                            return user.isBanished ? 'Banni(e)' : 'actif';
                          } else return null
                        })
                        .join('')}
                  </span>
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
