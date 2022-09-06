import React, { useState } from 'react';
import LeftNav from '../LeftNav';
import { useDispatch, useSelector } from 'react-redux';
import UploadImg from './UploadImg';
import { updateBio, updateWorkAt } from '../../../actions/user.actions';
import { dateParser } from '../../Utils';
import FollowHandler from './FollowHandler';

const UpdateProfil = () => {
  const [bio, setBio] = useState('');
  const [workAt, setWorkAt] = useState('');
  const [updateForm, setUpdateForm] = useState(false);
  const [updateWork, setUpdateWork] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.userError);
  const usersData = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();

  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);

  const handleUpdateBio = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  const handleUpdateWorkAt = () => {
    dispatch(updateWorkAt(userData._id, workAt));
    setUpdateWork(false);
  };

  return (
    <div className="profil-container">
      <LeftNav />
      <div className="title-profil">
        <h1>Profil de {userData.pseudo}</h1>
      </div>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de Profil</h3>
          <img src={userData.profilePicture} alt="user-pic" />
          <UploadImg />
          <p>{error.maxSize}</p>
          <p>{error.format}</p>
        </div>
        <div className="right-part">
          {/* Update bio */}
          <div className="bio-update">
            <h3>Presentation</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdateBio}>Valider</button>
              </>
            )}
          </div>
          {/* Update Work at */}
          <div className="work-update">
            <h3>Secteur activite</h3>
            {updateWork === false && (
              <>
                <p onClick={() => setUpdateWork(!updateWork)}>
                  {userData.worksAt}
                </p>
                <button onClick={() => setUpdateWork(!updateWork)}>
                  Modifier
                </button>
              </>
            )}
            {updateWork && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.worksAt}
                  onChange={(e) => setWorkAt(e.target.value)}
                ></textarea>
                <button onClick={handleUpdateWorkAt}>Valider</button>
              </>
            )}
            <div className="membreText">
              <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
            </div>
            <h5 onClick={() => setFollowingPopup(true)}>
              Abonnements :
              {userData.following ? userData.following.length : '0'}
            </h5>
            <h5 onClick={() => setFollowersPopup(true)}>
              Abonnés : {userData.followers ? userData.followers.length : '0'}
            </h5>
          </div>
        </div>
      </div>
      {followingPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowingPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img
                          src={
                            user.isBanished
                              ? './uploads/profil/blocked-user.png'
                              : user.profilePicture
                          }
                          alt="user-pic"
                        />
                        <h4>
                          {user.isBanished
                            ? 'Utilisateur Inexistant'
                            : user.pseudo}
                        </h4>
                        <div className="follow-handler">
                          <FollowHandler
                            idToFollow={user._id}
                            type={'suggestion'}
                          />
                        </div>
                      </li>
                    );
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span className="cross" onClick={() => setFollowersPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img
                          src={
                            user.isBanished
                              ? './uploads/profil/blocked-user.png'
                              : user.profilePicture
                          }
                          alt="user-pic"
                        />
                        <h4>
                          {user.isBanished
                            ? 'Utilisateur Inexistant'
                            : user.pseudo}
                        </h4>
                        <div className="follow-handler">
                          {user.isBanished ? null : (
                            <FollowHandler
                              idToFollow={user._id}
                              type={'suggestion'}
                            />
                          )}
                        </div>
                      </li>
                    );
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfil;
