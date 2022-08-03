import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { END_POINT } from "../utils/constant";

export const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);

  const checkAuthenticated = async () => {
    let token = null, refresh = null
    if(!refreshToken)
      refresh = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_REFRESH_NAME)
    if(!accessToken)
      token = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME)
    if(!token) return false
    try {
      const res = await axios.post(`${END_POINT}/auth/verify-token`, { accessToken: token, refreshToken: refresh })
      const { data } = res.data
      setUser(data.user)
      if(data.accessToken)
      setAccessToken(data.accessToken)
      else
      setAccessToken(token)
      setRefreshToken(refresh)
    } catch (error) {
      return false
    }
    return true
  }

  const loginHandle = (_accessToken, _refreshToken, user) => {
    setUser(user);
    setAccessToken(_accessToken);
    setRefreshToken(_refreshToken)
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_REFRESH_NAME,
      _refreshToken
    );
    localStorage.setItem(
      "login",
      "login"
    );
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME,
      _accessToken
    );
  };
  
  const logoutHandle = async () => {
    console.log(accessToken)
    const refreshToken = localStorage.getItem(
      process.env.REACT_APP_LOCALSTORAGE_REFRESH_NAME
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
      localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_REFRESH_NAME);
      localStorage.removeItem("login");
      setAccessToken(null);
      setRefreshToken(null)
      setUser(null);
      alert("logoutsuccess");
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
   checkAuthenticated()
  },[])
  return (
    <MainContext.Provider
      value={{
        accessToken,
        user,
        loginHandle,
        logoutHandle,
        checkAuthenticated,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
