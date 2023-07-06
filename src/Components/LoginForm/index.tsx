import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LoginFormSchema } from './LoginFormSchema';
import { Input } from '../Input/Input';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const navigate = useNavigate();

  interface FormData extends z.infer<typeof LoginFormSchema> {
    email: string;
    password: string;
  }

  const submit = (formData: FormData) => {
    console.log(formData);
    loginUser(formData);
  };

  const loginUser = async (formData: FormData) => {
    try {
      const { data } = await api.post('/login', formData);
      localStorage.setItem('@TOKEN', data.accessToken);
      localStorage.setItem('@USERID', data.user.id);
      localStorage.setItem('@USERNAME', data.user.name);
      navigate('/');
    } catch (error) {
      console.log('233');
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
      <Input type="email" placeholder="E-mail" register={register('email')} />
      {<p>{errors.email?.message}</p>}
      <Input type="text" placeholder="senha" register={register('password')} />
      {<p>{errors.password?.message}</p>}
      <button>Entrar</button>
      <p>ou</p>
      <Link to={'/registerPage'}>Cadastre-se</Link>
    </form>
  );
};
