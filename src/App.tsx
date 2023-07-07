import { MovieProvider } from './providers/MovieContext';
import { ReviewProvider } from './providers/ReviewContext';
import { UserProvider } from './providers/UserContext';
import { RoutesMain } from './routes/RoutesMainTest';
import { GlobalVariables } from './styles/Global';
import { GlobalReset } from './styles/Reset';

export const App = () => {
  return (
    <>
      <MovieProvider>
        <UserProvider>
          <ReviewProvider>
            <GlobalReset />
            <GlobalVariables />
            <RoutesMain />
          </ReviewProvider>
        </UserProvider>
      </MovieProvider>
    </>
  );
};
