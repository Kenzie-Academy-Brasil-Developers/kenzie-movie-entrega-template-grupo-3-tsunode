import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { setUsers } = useContext(UserContext);

  return setUsers ? <Outlet/> : <Navigate to="/"/>
};
