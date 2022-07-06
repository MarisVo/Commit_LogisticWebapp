import { createContext, useState } from "react";
import axios from "axios";
import { END_POINT } from "../utils/constant";

export const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState("admin");

  const checkAuthenticated = async () => {
    if (!refreshToken) {
      const refresh = localStorage.getItem(
        process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME
      );
      if (!refresh) return false;
      try {
        const res = await axios.post(`${END_POINT}/auth/verify-token`, {
          accessToken,
          refreshToken: refresh,
        });
        const { data } = res.data;
        setUser(data.user);
        setAccessToken(data.accessToken);
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return true;
  };

  const loginHandle = (_accessToken, _refreshToken, user) => {
    setUser(user);
    setAccessToken(_accessToken);
    setRefreshToken(_refreshToken);
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME,
      _refreshToken
    );
  };

  const logoutHandle = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME);
  };

  const state = {
    accessToken,
    user,
    checkAuthenticated,
    loginHandle,
    logoutHandle,
  };
  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};

export default MainProvider;
