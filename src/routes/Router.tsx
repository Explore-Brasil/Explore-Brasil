import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import {LoginPage} from "../pages/LoginPage"

const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
);

export default Router;
