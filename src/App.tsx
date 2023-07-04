import { RoutesMain } from './routes/RoutesMainTest';
import { GlobalVariables } from './styles/Global';
import { GlobalReset } from './styles/Reset';

export const App = () => {

  return(
    <>
      <GlobalReset />
      <GlobalVariables/>
      <RoutesMain/>
    </>
  )
};
