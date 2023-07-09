import { Footer } from '../../Components/Footer/Foot';
import { Header } from '../../Components/Header/Header';
import { Register } from '../../Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <ToastContainer /> {/* Adiciona o ToastContainer aqui */}
      <Register />
      <Footer />
    </>
  );
};
