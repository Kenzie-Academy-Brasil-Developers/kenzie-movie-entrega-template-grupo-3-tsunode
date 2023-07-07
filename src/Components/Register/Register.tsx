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
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Footer } from "../Footer/Foot";
import { z } from "zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";

const passwordSchema = z
  .string()
  .min(8, "A senha deve ter no mínimo 8 caracteres")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "A senha deve conter letras maiúsculas, letras minúsculas, números e símbolos"
  );

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = (): JSX.Element => {
  const { register, handleSubmit } = useForm<IRegisterUser>();

  // const createUser = async (formData: IRegisterUser) => {
  //   console.log(formData);

  //   if (formData.password !== formData.confirmPassword) {
  //     toast.error("A senha e a confirmação de senha não correspondem");
  //     return;
  //   }
  //   try {
  //     passwordSchema.parse(formData.password);

  //     const { data } = await api.post("/users", {
  //       email: formData.email,
  //       password: formData.password,
  //       name: formData.name,
  //     });
  //     console.log("Sucesso");
  //     toast.success("Usuário cadastrado com sucesso");
  //   } catch (error) {
  //     console.log(error);

  //     toast.error("Erro ao cadastrar usuário");
  //   }
  // };


  const { createUser } = useContext(UserContext)

  const onSubmit: SubmitHandler<IRegisterUser> = (formData: IRegisterUser) => {
    console.log(formData);
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
          <Input
            placeholder="E-mail"
            type="email"
            register={register("email")}
          />
          <Input
            placeholder="Senha"
            type="password"
            register={register("password")}
          />
          <Input
            placeholder="Confirmar Senha"
            type="password"
            register={register("confirmPassword")}
          />
        </StyledInputArea>
        <StyledButtonLine>
          <Button title="Cadastre-se" />
        </StyledButtonLine>
        <Footer />
      </StyledRegisterForm>
    </StyledRegister>
  );
};
