import { Header } from "../../Components/Header/Header";
import { Register } from "../../Components/Register/Register";

export const RegisterPage = () => {
  return (
    <>
      <Header/>
      <a href="/">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
      <Register />
    </>
  );
};
