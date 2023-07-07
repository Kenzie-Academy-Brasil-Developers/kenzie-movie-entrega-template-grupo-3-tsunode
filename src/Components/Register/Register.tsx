import arrow from '../../assets/arrow.svg';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  StyledButtonLine,
  StyledInputArea,
  StyledRegister,
  StyledRegisterForm,
  StyledTitleSection,
} from './RegisterStyle';
import { Paragraph, RegisterLink, Title1 } from '../../styles/typography';
import { toast } from 'react-toastify';
import { Footer } from '../Footer/Foot';
import { z } from 'zod';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { useNavigate } from 'react-router-dom';
import { RegisterFormSchema } from './RegisterFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(RegisterFormSchema),
  });

  interface IRegisterUser extends z.infer<typeof RegisterFormSchema> {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  const { createUser } = useContext(UserContext);

  const onSubmit: SubmitHandler<IRegisterUser> = (formData: IRegisterUser) => {
    createUser(formData);
  };

  return (
    <StyledRegister>
      <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTitleSection>
          <Title1>Cadastro</Title1>
          <RegisterLink>
            <img src={arrow} alt="" /> Voltar
          </RegisterLink>
        </StyledTitleSection>
        <Paragraph>Preencha os campos para cadastrar-se</Paragraph>
        <StyledInputArea>
          <Input placeholder="Nome" type="text" register={register('name')} />
          {<p>{errors.name?.message}</p>}
          <Input
            placeholder="E-mail"
            type="email"
            register={register('email')}
          />
          {<p>{errors.email?.message}</p>}
          <Input
            placeholder="Senha"
            type="password"
            register={register('password')}
          />
          {<p>{errors.password?.message}</p>}
          <Input
            placeholder="Confirmar Senha"
            type="password"
            register={register('confirmPassword')}
          />
          {<p>{errors.confirmPassword?.message}</p>}
        </StyledInputArea>
        <StyledButtonLine>
          <Button title="Cadastre-se" />
        </StyledButtonLine>
        <Footer />
      </StyledRegisterForm>
    </StyledRegister>
  );
};
