import React from 'react';
import { useSelector } from 'react-redux';
import LeftNav from '../../components/public/LeftNav';
import { isEmpty } from '../../components/Utils';
import Card from '../../components/public/Post/Card';
import Trends from '../../components/Trends';
import FriendsHint from '../../components/public/Profil/FriendsHint';

const Trending = () => {
  const trendList = useSelector((state) => state.trendingReducer);

  return (
    <div className="trending-page">
      <LeftNav />
      <div className="main">
        <ul>
          {!isEmpty(trendList[0]) &&
            trendList.map((post) => <Card post={post} key={post._id} />)}
        </ul>
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <Trends />
          <FriendsHint />
        </div>
      </div>
    </div>
  );
};

export default Trending;
