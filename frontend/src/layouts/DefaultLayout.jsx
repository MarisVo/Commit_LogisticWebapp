import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
function DefaultLayout() {
  const { checkAuthenticated} = useContext(MainContext)
  useEffect(async () => {
    await checkAuthenticated()
  }, [])
    return ( 
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
     );
}

export default DefaultLayout;