import { createContext, useState } from "react";
import axios from 'axios'
import { END_POINT } from '../utils/constant'

const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)


  const checkAuthenticated = async () => {
    const refreshToken = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME)
    try {
      const res = await axios.post(`${END_POINT}/auth/verify-token`, { accessToken, refreshToken })
      const { data } = res.data
      setUser(data.user)
      setAccessToken(data.accessToken)
    } catch (error) {
      console.log(error)
      return false
    }
    return true
  }

  const loginHandle = (_accessToken, _refreshToken, user) => {
    setUser(user)
    setAccessToken(_accessToken)
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME, _refreshToken)
  }

  const logoutHandle = () => {
    setAccessToken(null)
    setUser(null)
    localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN_NAME)
  }

  return (
    <MainContext.Provider value={{ accessToken, user, checkAuthenticated, loginHandle, logoutHandle }}>
      {children}
    </MainContext.Provider>
  )
};

export default MainProvider