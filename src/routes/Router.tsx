import { Routes, Route } from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage"

const Router = () => (
  <Routes>
    <Route path='/register' element={<RegisterPage />} />
  </Routes>
);

export default Router;