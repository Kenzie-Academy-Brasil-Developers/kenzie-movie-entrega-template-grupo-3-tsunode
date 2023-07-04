import { Link } from "react-router-dom";

export const LoginPage = () => {
    


    
    return(
        <>
        
            <a href="/homePage">homePage</a>
            <a href="/loginPage">loginPage</a>
            <a href="/registerPage">registerPage</a>
            <header></header>
            <form action="">
                <h1>Login</h1>
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="senha" />
                <button>Entrar</button>
                <p>ou</p>
                <Link to={'/registerPage'}>Cadastre-se</Link>
                
            </form>
            <footer></footer>
        
        
        </>
    )
}