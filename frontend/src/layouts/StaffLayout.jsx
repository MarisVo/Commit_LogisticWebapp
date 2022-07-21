import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

function  StaffRoute ()  {
   const { user } = useContext(MainContext)
  if (user && user.role.customer_type) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
export default StaffRoute