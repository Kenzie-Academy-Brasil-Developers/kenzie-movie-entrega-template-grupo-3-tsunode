import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar a existência do token no local storage
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Função para fazer login
  const login = () => {

    setIsAuthenticated(true);
  };

  const logout = () => {

    localStorage.removeItem('@TOKEN');

    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
