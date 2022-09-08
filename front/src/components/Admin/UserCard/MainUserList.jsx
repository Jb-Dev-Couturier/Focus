import React from 'react'
import { useSelector } from 'react-redux';
import { isEmpty } from '../../Utils';
import CardUser from './CardUser';

const MainUserList = () => {
  const usersData = useSelector((state) => state.usersReducer);
  return (
    <div className="MainUserList">
      <div className="Header">
        <h1>Liste Des Utilisateur</h1>
        <h3>
          Pour rendre un utilisateur Inactif Cliquez sur son boutton
          <span className="statutActif">Actif</span>
        </h3>
        <h3>
          Pour debloquer un utilisateur Cliquez sur son boutton
          <span className="statutInActif">Banni</span>
        </h3>
      </div>
      <div className="cardUser-container">
        <ul>
          {!isEmpty(usersData[0]) &&
            usersData.map((userinfo) => (
              <div className="parentContainer">
                <CardUser userinfo={userinfo} key={userinfo._id} />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default MainUserList
