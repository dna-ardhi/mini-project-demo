import { Routes, Route } from 'react-router-dom';
import { API_URL_BACKEND } from './constant/url';
import { Navbar, Banner, Form } from './components';

import DashboardLayout from './layouts/dashboard';
import DefaultLayout from './layouts/default';

import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import routeList from './routes/routeList';
 
function App() {
  return (
    <div>
      <DefaultLayout>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>   
      </DefaultLayout>
    </div>
  );
}

export default App;
