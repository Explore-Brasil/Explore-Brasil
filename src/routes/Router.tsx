import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import RegisterPage from "../pages/RegisterPage"

const Router = () => (
  <Routes>
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
);

export default Router;