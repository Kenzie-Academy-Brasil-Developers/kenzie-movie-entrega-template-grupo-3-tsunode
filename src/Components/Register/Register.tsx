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

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = (): JSX.Element => {
  const { register, handleSubmit } = useForm<IRegisterUser>();

  const createUser = async (formData: IRegisterUser) => {
    console.log(formData);
    try {
      const { data } = await api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      console.log("Sucesso");
      toast.success("Usuário cadastrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar usuário");
    }
  };

  const onSubmit: SubmitHandler<IRegisterUser> = (formData) => {
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
      </StyledRegisterForm>
    </StyledRegister>
  );
};
