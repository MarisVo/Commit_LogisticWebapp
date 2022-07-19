
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

function  ProtectedRoute ()  {
    const {user} = useContext(MainContext)
   
    /* console.log(user.role.customer_type) */
  if (user&&user.role.customer_type) {
    return <Navigate to="/"  />;
  }
  if (user&&!user.role.customer_type) {
    return <Navigate to="/admin"  />;
  }

  return <Outlet />;
};
export default ProtectedRoute