import arrow from "../../assets/arrow.svg"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"

export const Register = () =>{
    return(
        <form >
            <div>
            <h1>Cadastro</h1>
            <button> <img src={arrow} alt="" />  Voltar</button>
            </div>
            <p>Preencha os campos para cadastrar-se</p>
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar Senha" />
            <Button title="Cadastre-se" />
        </form>
    )
}