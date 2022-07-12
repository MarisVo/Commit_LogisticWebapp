import { useContext } from "react";

import { MainContext } from "./../context/MainContext";
import { axios } from "axios";
const { accessToken } = useContext(MainContext);
/* export default function useAuthConfig() {

  return {
    Authorization: `Bearer ${accessToken}`,
  };
} */
export const getAPI = async (url) => {
  const res = await axios.get(`REACT_APP_API_BASE_URL/${url}`, {
    Authorization: `Bearer ${accessToken}`,
  });
};
export const postAPI = async (url, post) => {
  const res = await axios.post(`REACT_APP_API_BASE_URL/${url}`, post, {
    Authorization: `Bearer ${accessToken}`,
  });
};
