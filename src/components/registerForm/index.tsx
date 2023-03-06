import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../Input/index"
import { useContext } from 'react';
import { Usercontext } from '../../providers/Usercontext';

interface IRegisterData {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  FieldErrors: string;
}

const RegisterForm = () => {

  const {registerUser} = useContext(Usercontext)
    
  
    const schema = yup.object({
      name: yup.string().required('Por favor digite seu nome'),
  
      email: yup
        .string()
        .required('por favor digite seu email')
        .email('Digite um email valido'),
  
      password: yup
        .string()
        .required('digite uma senha')
        .matches(/^(?=.*\d)/, 'Necessario ao menos um numero')
        .matches(/(?=.*[a-z])/, 'necessita ao menos uma letra ')
        .matches(/(?=.*[$*&@#])/, 'necessita ao menos um simbolo')
        .matches(/[0-9a-zA-Z$*&@#]{8,}$/, 'necessita no minimo 8 digitos'),
  
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas não correspondem verifique'),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IRegisterData>({
      resolver: yupResolver(schema),
    });
  
    return (
      <form onSubmit={handleSubmit(registerUser)}>
        <Input
          label='Digite seu nome'
          type='text'
          message={errors.name?.message}
          {...register('name')}
        />
        <Input
          label='Digite seu email'
          type='text'
          message={errors.email?.message}
          {...register('email')}
        />
        <Input
          label='Digite sua senha'
          type='password'
          message={errors.password?.message}
          {...register('password')}
        />
        <Input
          label='Confirmar Senha'
          type='password'
          message={errors.passwordConfirmation?.message}
          {...register('passwordConfirmation')}
        />
        <button type='submit' >
          Cadastrar
        </button>
      </form>
    );
  };
  
export default RegisterForm;