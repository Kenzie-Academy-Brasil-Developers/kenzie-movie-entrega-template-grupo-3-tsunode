import { Footer } from "../../Components/Footer/Foot";
import { LoginForm } from "../../Components/LoginForm";

export const LoginPage = () => {
    
    const { register, handleSubmit } = useForm<FormData>()

    interface FormData {
        email: string;
        password: string;
    }

    const submit = (formData: FormData) => {
        console.log(formData)
        loginUser(formData)
    }

    const loginUser = async (formData: FormData) => {
        try {
            const { data } = await api.post('/login', formData)
            localStorage.setItem('@TOKEN', JSON.stringify(data.accessToken))
            localStorage.setItem('@USERID', JSON.stringify(data.user.id))
        } catch (error) {
            console.log('233')

        }
    } 
    
    return(
        <>
        
            <a href="/homePage">homePage</a>
            <a href="/loginPage">loginPage</a>
            <a href="/registerPage">registerPage</a>
            <header></header>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Login</h1>
                <input type="email" placeholder="E-mail" {...register('email')} />
                <input type="text" placeholder="senha" {...register('password')} />
                <button>Entrar</button>
                <p>ou</p>
                <Link to={'/registerPage'}>Cadastre-se</Link>
            </form>
            <Footer/>
        
        
        </>
    )
}