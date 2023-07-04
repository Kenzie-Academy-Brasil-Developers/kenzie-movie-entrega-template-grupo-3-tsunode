import { Footer } from "../../Components/Footer/Foot";
// import { LoginForm } from "../../Components/LoginForm";
import { LoginLowerSection, StyledLoginForm, StyledLoginSection } from "./LoginStyle";
import { StyledInput } from "../../styles/Inputs";
import { Paragraph, RegisterLink, Title1 } from "../../styles/typography";
import { MediumYellowButton } from "../../styles/Buttons";
import { LoginForm } from "../../Components/LoginForm";


export const LoginPage = () => {
    
    return(
        <>
        
            <a href="/">homePage</a>
            <a href="/loginPage">loginPage</a>
            <a href="/registerPage">registerPage</a>
            <header></header>
            <LoginForm />
            <Footer/>
        
        
        </>
    )
}