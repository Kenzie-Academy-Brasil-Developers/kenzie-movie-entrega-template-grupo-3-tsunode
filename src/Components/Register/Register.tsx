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
import { Paragraph, RegisterLink, Title1 } from "../../styles/Typography";
import { z } from "zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

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
          <Input placeholder="Nome" type="text" register={register("name")} />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <Input
            placeholder="E-mail"
            type="email"
            register={register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            placeholder="Senha"
            type="password"
            register={register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}

          <Input
            placeholder="Confirmar Senha"
            type="password"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <p>{errors.confirmPassword.message}</p>
          ) : null}
        </StyledInputArea>
        <StyledButtonLine>
          <Button title="Cadastre-se" />
        </StyledButtonLine>
      </StyledRegisterForm>
    </StyledRegister>
  );
};
