import { Footer } from '../../Components/Footer/Foot';
// import { LoginForm } from "../../Components/LoginForm";
import { LoginForm } from '../../Components/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <>
      
      <a href="/">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
      <LoginForm />
      <Footer />
    </>
  );
};
