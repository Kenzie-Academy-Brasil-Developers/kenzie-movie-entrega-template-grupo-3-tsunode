import { ReactNode, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});


interface UserProviderProps {
    children: ReactNode;
}
  


export const UserProvider = ({ children }: UserProviderProps) => {


const localMovieId = localStorage.getItem('@LOCALMOVEID')

const token = localStorage.getItem('@TOKEN')

const userId = localStorage.getItem('@USERID')

const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
};

const createUser = async (formData) => {
    try {
      const { data } = await api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      console.log("Sucesso");
    } catch (error) {
      console.log(error);
    }
};

const loginUser = async (formData) => {
    try {
      const { data } = await api.post('/login', formData);
      localStorage.setItem('@TOKEN', data.accessToken);
      localStorage.setItem('@USERID', data.user.id);
      localStorage.setItem('@USERNAME', data.user.name);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await api.get(`/users`);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    if(userId == null){
        console.log('sem usuario logado')
    }else{
        const getUserUnique = async () => {
            try {
              const { data } = await api.get(`/users/${userId}`);
              console.log('achou o usuário')
            } catch (error) {
              console.log(error.message);
            }
          };
        getUserUnique();
    }
    
  }, []);
    
    


  

    return (
      <UserContext.Provider
        value={''}
      >
        {children}
      </UserContext.Provider>
    );
  };