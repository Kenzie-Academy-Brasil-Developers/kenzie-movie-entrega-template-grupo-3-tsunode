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

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { register, handleSubmit } = useForm<IRegisterUser>();

  const onSubmit: SubmitHandler<IRegisterUser> = (data) => {
    console.log(data);
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
          <Input placeholder="Nome" register={register("name")} />
          <Input placeholder="E-mail" register={register("email")} />
          <Input placeholder="Senha" register={register("password")} />
          <Input
            placeholder="Confirmar Senha"
            register={register("confirmPassword")}
          />
        </StyledInputArea>
        <StyledButtonLine>
          <Button title="Cadastre-se" />
        </StyledButtonLine>
      </StyledRegisterForm>
    </StyledRegister>
  );
};
