import arrow from "../../assets/arrow.svg"

export const Register = () =>{
    return(
        <form >
            <div>
            <h1>Cadastro</h1>
            <button> <img src={arrow} alt="" />  Voltar</button>
            </div>
            <p>Preencha os campos para cadastrar-se</p>
        </form>
    )
}