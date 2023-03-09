import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import DashBoard from "../pages/DashBoard";
import { Testpage } from "../pages/testpage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashBoard />} />
    <Route path="/testPage" element={<Testpage />} />
  </Routes>
);

export default Router;
