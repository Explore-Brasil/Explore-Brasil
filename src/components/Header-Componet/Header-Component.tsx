import { Header } from "./styled"
import logo from '../../assets/logo.svg'
import { useContext } from "react"
import { Usercontext } from "../../providers/Usercontext"

export const HeaderComponent = () => {

    const {loginPage, registerPage, mainPage} = useContext(Usercontext)
    
    return (
       <Header>
            <div className="imgLogo">
                <img src={logo} alt="" />
            </div>
            <div className="div-login-register">
                <button type = 'button' onClick={loginPage}>Login</button>
                <button type = 'button' onClick={registerPage}>Registrar</button>
                <button type= "button" onClick={mainPage} >Inicio</button>
            </div>
       </Header> 
        )
}