import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 204px;
    background-color: #4EC4AE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 769px){
    flex-direction: row;
    height: 136px;
    justify-content: space-between;
    }

    .imgLogo {
    width: 106px;
    height: 97px;
    margin-bottom: 21px;
    
    @media (min-width: 769px){
    margin-left: 15%;
    }

        img {
            width: 100%;
        }
    }
    .div-login-register {
    display: flex;
    flex-direction: column;
    gap: 23px;
    

    @media (min-width: 769px){
    flex-direction: row;
    margin-right: 15%;
    gap: 40px;
    }

    button {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }
    }
`