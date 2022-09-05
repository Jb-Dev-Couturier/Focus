import { Route, Routes } from 'react-router-dom';
import { accountServices } from '../src/_services/account.services';
import { UidContext } from './components/AppContext';
import PublicRouter from './pages/public/PublicRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import AuthGuard from './_helpers/AuthGuard';




function App() {
  
  const userId = accountServices.getUserId()
  return (
    <UidContext.Provider value={userId}>
      <div className="App">
        <Routes>
          <Route
            path="/*"
            element={
              <AuthGuard>
                <PublicRouter uid={userId} />
              </AuthGuard>
            }
          />
          <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
      </div>
    </UidContext.Provider>
  );
}

export default App;
