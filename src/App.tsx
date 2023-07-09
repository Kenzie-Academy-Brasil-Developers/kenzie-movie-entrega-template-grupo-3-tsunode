import { MovieProvider } from './providers/MovieContext';
import { ReviewProvider } from './providers/ReviewContext';
import { UserProvider } from './providers/UserContext';
import { RoutesMain } from './routes/RoutesMainTest';
import { GlobalVariables } from './styles/Global';
import { GlobalReset } from './styles/Reset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <MovieProvider>
        <UserProvider>
          <ReviewProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <GlobalReset />
            <GlobalVariables />
            <RoutesMain />
          </ReviewProvider>
        </UserProvider>
      </MovieProvider>
    </>
  );
};
