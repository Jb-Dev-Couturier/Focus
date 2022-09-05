import {Route, Routes } from 'react-router-dom';

import PublicRouter from './pages/public/PublicRouter';
import AdminRouter from './pages/Admin/AdminRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import AuthGuard from './_helpers/AuthGuard';



function App() {
    
    
  return (
    <div className="App">
      
        <Routes>
          <Route
            path="/*"
            element={
              <AuthGuard>
                <PublicRouter />
              </AuthGuard>
            }
          />

          <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            }
          />
          <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
      
    </div>
  );
}

export default App;
