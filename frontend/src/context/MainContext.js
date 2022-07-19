import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const loginHandle = (_accessToken, _refreshToken, user) => {
    setUser(user);
    console.log("mm", user);
    console.log(user.role.customer_type)
    console.log("json", JSON.stringify(user));
    setAccessToken(_accessToken);

      localStorage.setItem(
      "user",
      JSON.stringify(user)
    );
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME,
      _refreshToken
    );
  };

  const logoutHandle = async () => {
    const refreshToken = localStorage.getItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME
    );
    try {
      await axios.post(
        "http://localhost:8000/api/auth/logout",
        {
          refreshToken,
        },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME);
      localStorage.removeItem("user");
      setAccessToken(null);
      setUser(null);
      alert("logoutsuccess");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    const refreshToken = localStorage.getItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME
    );
    if(refreshToken){
      const handleRefreshToken = async () => {
        try {
          const res = await axios.post(
            `http://localhost:8000/api/auth/verify-token`,
            {
              accessToken,
              refreshToken,
            }
          );
          const { data } = res.data;
          console.log("res,",res)
       /*      localStorage.setItem(
              "user",
              JSON.stringify(data.user)
            );
           const newuser = localStorage.getItem("user")
            setUser(JSON.parse(newuser)) */
            setAccessToken(data.accessToken);
            setUser(data.user)
        } catch (error) {
          console.log(error);
        }
      };
      handleRefreshToken();
    } 
  }, []);

  /* useEffect(()=>{
    const userlocal = localStorage.getItem(
      "user"
    );
    if(userlocal){
      const newuser = JSON.parse(userlocal)
      console.log(newuser)
       setUser(user);
    }
  },[user]) */

  return (
    <MainContext.Provider
      value={{
        accessToken,
        user,
        loginHandle,
        logoutHandle,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
