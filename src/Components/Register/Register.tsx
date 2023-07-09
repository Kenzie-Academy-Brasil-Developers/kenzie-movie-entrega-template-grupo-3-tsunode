import arrow from "../../assets/arrow.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  StyledButtonLine,
  StyledInputArea,
  StyledRegister,
  StyledRegisterForm,
  StyledTitleSection,
} from "./RegisterStyle";
import { Paragraph, RegisterLink, Title1 } from "../../styles/typography";
import { z } from "zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const navigate = useNavigate()

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
          <RegisterLink onClick={() => navigate('/')}>
            <img src={arrow}  alt="" /> Voltar
          </RegisterLink>
        </StyledTitleSection>
        <Paragraph>Preencha os campos para cadastrar-se</Paragraph>
        <StyledInputArea>
          <Input placeholder="Nome" type="text" register={register("name")} />
          {errors.name ? <Paragraph>{errors.name.message}</Paragraph> : null}
          <Input
            placeholder="E-mail"
            type="email"
            register={register("email")}
          />
          {errors.email ? <Paragraph>{errors.email.message}</Paragraph> : null}
          <Input
            placeholder="Senha"
            type="password"
            register={register("password")}
          />
          {errors.password ? <Paragraph>{errors.password.message}</Paragraph> : null}

          <Input
            placeholder="Confirmar Senha"
            type="password"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <Paragraph>{errors.confirmPassword.message}</Paragraph>
          ) : null}
        </StyledInputArea>
        <StyledButtonLine>
          <Button title="Cadastre-se" />
        </StyledButtonLine>
      </StyledRegisterForm>
    </StyledRegister>
  );
};
