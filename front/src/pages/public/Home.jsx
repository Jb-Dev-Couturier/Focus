import LeftNav from '../../components/public/LeftNav';
import React, { useContext } from 'react';
import { UidContext } from '../../components/AppContext';
import Thread from '../../components/Thread';
import NewPostForm from '../../components/public/Post/NewPostForm';
import Trends from '../../components/Trends';
import FriendsHint from '../../components/public/Profil/FriendsHint';

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          <NewPostForm />
        </div>
        {uid && <Thread />}
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            {uid ? (
              <Trends />
            ) : (
              <div className="img-container">
                <img src="./img/login.gif" alt="img-log" />
              </div>
            )}

            {uid && <FriendsHint />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home