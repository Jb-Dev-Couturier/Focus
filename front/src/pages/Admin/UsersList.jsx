import React from 'react';
import LeftNavAdmin from '../../components/Admin/LeftNavAdmin';
import MainUserList from '../../components/Admin/UserCard/MainUserList';

const UsersList = () => {
  return (
    <>
      <LeftNavAdmin />
      <div className="UsersListbody">
        <div className="adminGlass">
          <MainUserList/>
        </div>
      </div>
    </>
  );
};

export default UsersList;
