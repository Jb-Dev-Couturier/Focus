import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { getPosts } from '../../actions/post.actions';
import LeftNavAdmin from '../../components/Admin/LeftNavAdmin';
import MainDash from '../../components/Admin/MainDash';
import RightSideDash from '../../components/Admin/RightSide/RightSideDash';

const Dashboard = () => {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      if (loadPost) {
        dispatch(getPosts());
        setLoadPost(false);
      }
    }, [loadPost, dispatch]);

  
  return (
    <>
      <LeftNavAdmin />
      <div className="dashboard-body">
        <div className="adminGlass">
          <MainDash  />
          <RightSideDash />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
