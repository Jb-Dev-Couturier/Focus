import React, { useEffect, useState } from 'react';
import { UidContext } from './components/AppContext'
import IndexRoutes from './pages/indexRoutes.jsx'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';


const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log('No token'));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <IndexRoutes uid={uid}/>
    </UidContext.Provider>
  );
};

export default App;
