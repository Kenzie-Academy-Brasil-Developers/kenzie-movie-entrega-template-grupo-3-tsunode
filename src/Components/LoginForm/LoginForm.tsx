import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginFormSchema } from "./LoginFormSchema";
import { Input } from "../Input/Input";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Header } from "../Header/Header";
import {
  LoginLowerSection,
  StyledLoginForm,
  StyledLoginSection,
} from "./StyleLogin";
import {
  Paragraph,
  RegisterLink,
  Title1,
  Title2,
} from "../../styles/Typography";
import { MediumYellowButton } from "../../styles/Buttons";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  interface FormData extends z.infer<typeof LoginFormSchema> {
    email: string;
    password: string;
  }

  const { loginUser } = useContext(UserContext);

  const submit = (formData: FormData) => {
    loginUser(formData);
  };

  return (
    <StyledLoginSection>
      <Header />
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <Title1>Login</Title1>
        <Input type="email" placeholder="E-mail" register={register("email")} />
        {errors.email ? <Paragraph>{errors.email.message}</Paragraph> : null}
        <Input
          type="text"
          placeholder="senha"
          register={register("password")}
        />
        {errors.password ? <Paragraph>{errors.password.message}</Paragraph> : null}
        <LoginLowerSection>
          <MediumYellowButton buttonsize={undefined}>Entrar</MediumYellowButton>
          <Paragraph>ou</Paragraph>
          <Link to={"/registerPage"}>
            <RegisterLink>Cadastre-se</RegisterLink>
          </Link>
        </LoginLowerSection>
      </StyledLoginForm>
    </StyledLoginSection>
  );
};
