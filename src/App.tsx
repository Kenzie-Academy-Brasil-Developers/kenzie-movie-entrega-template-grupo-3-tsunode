import { GlobalVariables } from "./styles/Global";
import { StyledInput } from "./styles/Inputs";
import { GlobalReset } from "./styles/Reset";

export const App = () => {

  return (
    <>
      <GlobalReset />
      <GlobalVariables />
      <StyledInput />
    </>
  );
};
