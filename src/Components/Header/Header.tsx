import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { HeaderLetter, InnerHeaderDiv, LogoutButton, OuterHeaderDiv, StyledHeadSection, StyledHeader } from './styles';
import { HeaderCap, Paragraph } from '../../styles/Typography';
import { SmallYellowButton } from '../../styles/Buttons';



export const Header = () => {
  const token = localStorage.getItem('@TOKEN');

  const name = localStorage.getItem('@USERNAME');

  const navigate = useNavigate();

  return (
    <>
      {token == null ? (
        <StyledHeader>
          <img src={logo} alt="" />
          <StyledHeadSection>
            <HeaderCap onClick={() => navigate('/registerPage')}>Cadastre-se</HeaderCap>
            <SmallYellowButton buttonsize={8} onClick={() => navigate('/loginPage')}>Entrar</SmallYellowButton>
          </StyledHeadSection>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <img src={logo} alt="" />
          <OuterHeaderDiv>
            <InnerHeaderDiv>
              <HeaderLetter>{name[0]}</HeaderLetter>
              <Paragraph>{name}</Paragraph>
            </InnerHeaderDiv>
            <LogoutButton
              onClick={() => {
                localStorage.clear(), navigate('/');
              }}
            >
              Sair
            </LogoutButton>
          </OuterHeaderDiv>
        </StyledHeader>
      )}
    </>
  );
};
