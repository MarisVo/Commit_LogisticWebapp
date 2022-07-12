import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { END_POINT } from "../utils/constant";

export const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const checkAuthenticated = async () => {
    const refreshToken = localStorage.getItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME
    );
    if (!refreshToken) return false;
    try {
      const res = await axios.post(`${END_POINT}/auth/verify-token`, {
        accessToken,
        refreshToken,
      });
      const { data } = res.data;
      setUser(data.user);
      setAccessToken(data.accessToken);
    } catch (error) {
      return false;
    }
    return true;
  };

  const loginHandle = (_accessToken, _refreshToken, user) => {
    setUser(user);
    setAccessToken(_accessToken);
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME,
      _refreshToken
    );
  };

  const logoutHandle = async () => {
    try {
      await axios.get("/api/logout");
      setAccessToken(null);
      setUser(null);
      localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const checkAuthenticated = async () => {
      const refreshToken = localStorage.getItem(
        process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME
      );
      if (!refreshToken) return false;
      try {
        const res = await axios.post(`${END_POINT}/auth/verify-token`, {
          accessToken,
          refreshToken,
        });
        const { data } = res.data;
        setUser(data.user);
        setAccessToken(data.accessToken);
      } catch (error) {
        return false;
      }
      return true;
    };
    checkAuthenticated();
  }, [accessToken, user]);

  return (
    <MainContext.Provider
      value={{
        accessToken,
        user,
        checkAuthenticated,
        loginHandle,
        logoutHandle,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
