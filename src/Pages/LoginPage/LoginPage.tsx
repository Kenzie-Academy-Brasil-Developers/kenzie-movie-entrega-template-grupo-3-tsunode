import { Footer } from "../../Components/Footer/Foot";
import {
  LoginLowerSection,
  StyledLoginForm,
  StyledLoginSection,
} from "./LoginStyle";
import { StyledInput } from "../../styles/Inputs";
import { Paragraph, RegisterLink, Title1 } from "../../styles/typography";
import { MediumYellowButton } from "../../styles/Buttons";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { Header } from "../../Components/Header/Header";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../routes/Auth";

export const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <a href="/">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
      <header></header>
      <LoginForm />
      <Footer />
    </>
  );
};
