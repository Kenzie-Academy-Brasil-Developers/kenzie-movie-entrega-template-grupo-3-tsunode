import { Header } from '../../Components/Header/Header';
import { Register } from '../../Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <a href="/">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
      <ToastContainer /> {/* Adiciona o ToastContainer aqui */}
      <Register />
    </>
  );
};
