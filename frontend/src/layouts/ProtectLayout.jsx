import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

function ProtectedRoute() {
  const { checkAuthenticated, user } = useContext(MainContext)
  const [valid, setValid] = useState(false)

  useEffect(async () => {
    const check = await checkAuthenticated()
    setValid(!!check)
  }, [])

  if (valid && user && user.role.customer_type) {
    return <Navigate to="/" />;
  }
  if (valid && user && !user.role.customer_type) {
    return <Navigate to="/admin" />;
  }

  return <Outlet />;
};
export default ProtectedRoute