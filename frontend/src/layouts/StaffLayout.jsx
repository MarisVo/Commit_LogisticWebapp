import { useEffect } from 'react';
import { useContext,useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

function  StaffRoute ()  {
   const { user } = useContext(MainContext)
   const { checkAuthenticated} = useContext(MainContext)
    /*  const [valid, setValid] = useState(false) */
    const navigate = useNavigate()
  useEffect(async () => {
     const  login = localStorage.getItem("login")
     if(login){
       await checkAuthenticated()
     }
    console.log(user)
  }, [])
   useEffect(()=>{
     if(user?.role.staff_type==="admin"){
       navigate("/admin", { replace: true });
    }
    else if(user?.role.staff_type==="storekeeper") {
       navigate("/storekeeper", { replace: true });
    }
  },[user])
  console.log(user)
  return <Outlet />;
};
export default StaffRoute