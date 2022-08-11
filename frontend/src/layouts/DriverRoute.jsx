import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

function DriverRoute() {
  const { user } = useContext(MainContext)
    console.log(user)
  if (user && user?.role.staff_type==="driver") {
    return <Outlet />;
  }
  return <Navigate to="/dang-nhap-nhan-vien" />;
};
export default DriverRoute