import arrow from "../../assets/arrow.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Cadastro</h1>
        <button>
          {" "}
          <img src={arrow} alt="" /> Voltar
        </button>
      </div>
      <p>Preencha os campos para cadastrar-se</p>
      <Input placeholder="Nome" {...register("name")} />
      <Input placeholder="E-mail" {...register("email")} />
      <Input placeholder="Senha" {...register("password")} />
      <Input placeholder="Confirmar Senha" {...register("confirmPassword")} />
      <Button title="Cadastre-se" />
    </form>
  );
};
