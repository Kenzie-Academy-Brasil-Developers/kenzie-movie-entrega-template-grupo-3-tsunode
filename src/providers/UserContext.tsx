import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserProviderProps {
  children: ReactNode;
}

interface IUser {
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
  user: IUser | undefined;
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

  const navigate = useNavigate();

  const notify = (message: any) => toast(message);

  const createUser = async (formData: any) => {
    try {
      await api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      notify("Usuário criado com sucesso");
      navigate("/loginPage");
    } catch (error) {
      notify("Algo deu errado");
      console.log(error);
    }
  };

  const loginUser = async (formData: any) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);
      localStorage.setItem("@USERNAME", data.user.name);
      notify("✅Usuário logado com sucesso");
      navigate("/");
    } catch (error) {
      notify("⚠️ Email ou senha incorretos");
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await api.get(`/users`);
        setUsers(data);
      } catch (error: any) {
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
        setIsOpenDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
