import { Header } from "./styled";
import logoImg from "../../assets/Logo_Explore_Br-removebg-preview.png";
import { useContext } from "react";
import { Usercontext } from "../../providers/Usercontext";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";

export const HeaderComponent = () => {
  const { loginPage, registerPage, mainPage, logOut, users } =
    useContext(Usercontext);
  const user = localStorage.getItem("@ID");
  const userName = localStorage.getItem("@USER");
  const navigate = useNavigate();
  const params = useLocation();

  return (
    <Header>
      <div className="imgLogo">
        <img src={logoImg} alt="" />
      </div>
      <div className="div-login-register">
        {params.pathname === "/dashboard" && (
          <>
            <h3>Bem vindo {userName ? `,${userName}` : "de volta."}</h3>
            <button type="button" onClick={logOut}>
              LogOut
            </button>
          </>
        )}

        {params.pathname === "/login" && (
          <>
            <button type="button" onClick={registerPage}>
              Registrar
            </button>
            <button type="button" onClick={mainPage}>
              Inicio
            </button>
          </>
        )}

        {params.pathname === "/register" && (
          <>
            <button type="button" onClick={loginPage}>
              Login
            </button>
            <button type="button" onClick={mainPage}>
              Inicio
            </button>
          </>
        )}

        {params.pathname === "/" && (
          <>
            <button type="button" onClick={loginPage}>
              Login
            </button>
            <button type="button" onClick={registerPage}>
              Registrar
            </button>
          </>
        )}
      </div>
    </Header>
  );
};
