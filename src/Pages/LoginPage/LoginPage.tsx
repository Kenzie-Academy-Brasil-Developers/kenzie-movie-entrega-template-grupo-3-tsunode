import { useForm } from "react-hook-form";
import { Footer } from "../../Components/Footer/Foot";
// import { LoginForm } from "../../Components/LoginForm";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { LoginLowerSection, StyledLoginForm, StyledLoginSection } from "./LoginStyle";
import { StyledInput } from "../../styles/Inputs";
import { Paragraph, RegisterLink, Title1 } from "../../styles/typography";
import { MediumYellowButton } from "../../styles/Buttons";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormData>();

  interface FormData {
    email: string;
    password: string;
  }

  const submit = (formData: FormData) => {
    console.log(formData);
    loginUser(formData);
  };

  const loginUser = async (formData: FormData) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(data.accessToken));
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
    } catch (error) {
      console.log("233");
    }
  };

  return (
    <>
      <StyledLoginSection>
        <a href="/homePage">homePage</a>
        <a href="/loginPage">loginPage</a>
        <a href="/registerPage">registerPage</a>
        <header></header>
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
          <Title1>Login</Title1>
          <StyledInput
            inputheight={4}
            inputwidth={undefined}
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <StyledInput
            inputwidth={undefined}
            inputheight={4}
            type="text"
            placeholder="senha"
            {...register("password")}
          />
          <MediumYellowButton buttonsize={undefined}>Entrar</MediumYellowButton>
          <LoginLowerSection>
            <Paragraph>ou</Paragraph>
            <Link to={"/registerPage"}>
              <RegisterLink>Cadastre-se</RegisterLink>
            </Link>
          </LoginLowerSection>
        </StyledLoginForm>
      </StyledLoginSection>
      <Footer />
    </>
  );
};
