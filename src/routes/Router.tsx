import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashBoard from "../pages/DashBoard";

const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashBoard />} />
  </Routes>
);

export default Router;
