import LeftNav from '../../components/public/LeftNav';
import React from 'react';

import Thread from '../../components/Thread';
import NewPostForm from '../../components/public/Post/NewPostForm';
import Trends from '../../components/Trends';
import FriendsHint from '../../components/public/Profil/FriendsHint';

const Home = () => {
  
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          <NewPostForm />
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            
              <Trends />
            
              

            <FriendsHint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home