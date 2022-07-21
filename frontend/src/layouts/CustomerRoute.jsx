import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

function CustomerRoute() {
  const { user } = useContext(MainContext)
  if (user && user.role.customer_type) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
export default CustomerRoute