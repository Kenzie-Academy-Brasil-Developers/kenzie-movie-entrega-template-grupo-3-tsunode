import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { MovieContext } from "./MovieContext";



interface UserProviderProps {
    children: ReactNode;
}
  
interface IUser{ 
	email: string;
	name: string;
	age: number;
	id: number;
}

interface IUserContext {
  createUser: (formData: any) => Promise<void>;
  loginUser: (formData: any) => Promise<void>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  user:  IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenAtt: boolean;
  setIsOpenAtt: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenDelete: boolean;
  setIsOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;

}



export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {

const [users, setUsers] = useState<IUser[]>([]);

const [user, setUser] = useState<IUser>();

const [isOpen, setIsOpen] = useState(false);

const [isOpenAtt, setIsOpenAtt] = useState(false);

const [isOpenDelete, setIsOpenDelete] = useState(false);


const createUser = async (formData) => {
    try {
      const { data } = await api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await api.get(`/users`);
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);


    return (
      <UserContext.Provider
        value={{
          createUser,
          loginUser,
          users,
          setUsers,
          user,
          setUser,
          isOpen,
          setIsOpen,
          isOpenAtt,
          setIsOpenAtt,
          isOpenDelete,
          setIsOpenDelete
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };