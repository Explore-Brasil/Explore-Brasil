import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import Input from "../Input"
import * as yup from 'yup'
import { ILoginUserData, Usercontext } from "../../providers/Usercontext";
import { useContext } from "react";




const schema = yup.object({
    email: yup.string().required('Esse campo deve ser preenchido').email('Insira um email válido'),
    password: yup.string().required('Esse campo deve ser preenchido'),
})



export const LoginForm = () => {

    const { loginUser } = useContext(Usercontext)

    const {register, handleSubmit, formState: {errors} } = useForm<ILoginUserData>({
        resolver: yupResolver(schema),
      })

      



    return (
        <form onSubmit={handleSubmit(loginUser)}>

            <div className="upperPart">
                <span>Faça seu login</span>
                <Input  label={'Email'} type={'text'} message={errors.email?.message} {...register('email')} ></Input>
                <Input message={errors.password?.message} label={'Senha'} type={'password'} {...register('password')}></Input>

            </div>

            <div className="lowerPart">
                <button type="submit">Entrar</button>
                <span>Ainda não tem conta?</span>
                <Link to="/register" >Registrar-se agora</Link>
            </div>

        </form>
    )

}