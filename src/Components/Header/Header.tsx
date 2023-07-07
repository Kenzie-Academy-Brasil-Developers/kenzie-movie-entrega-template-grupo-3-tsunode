import  logo  from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    
    const token = localStorage.getItem('@TOKEN')

    const name = localStorage.getItem('@USERNAME')

    const navigate = useNavigate()
    

    return (
      <>
        {token == null ? 
            <header>
                    <img src={logo} alt="" /> 
                <div>
                    <p onClick={() => navigate('/registerPage')} >Cadastre-se</p>
                    <button onClick={() => navigate('/loginPage')}>Entrar</button>
                </div>
            </header>
        
        : 
        
            <header>
                <img src={logo} alt="" /> 
                <div>
                    <div>
                        <button>{name[0]}</button>
                        <p>{name}</p>
                    </div>
                    <button onClick={() => {localStorage.clear() , navigate('/')}}>Sair</button>
                </div>
            </header>
        }
      </>
    );
  };