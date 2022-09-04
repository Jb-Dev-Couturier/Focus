import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './pages/public/PublicRouter';
import AdminRouter from './pages/Admin/AdminRouter';
import Login from './pages/Auth/Login';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/auth/*" element={<Login signin={false} signup={true} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
