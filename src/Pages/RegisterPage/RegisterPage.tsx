import { Header } from "../../Components/Header/Header";
import { Register } from "../../Components/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../routes/Auth";

export const RegisterPage = () => {
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
      <ToastContainer />
      <Register />
    </>
  );
};
