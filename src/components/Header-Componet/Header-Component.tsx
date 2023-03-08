import { Header } from "./styled"
import logo from '../../assets/logo.svg'

export const HeaderComponent = () => {
    
    return (
       <Header>
            <div className="imgLogo">
                <img src={logo} alt="" />
            </div>
            <div className="div-login-register">
                <button type = 'button'>Login</button>
                <button type = 'button'>Registrar</button>
            </div>
       </Header> 
        )
}