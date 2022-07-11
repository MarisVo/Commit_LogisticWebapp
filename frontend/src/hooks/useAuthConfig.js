import { useContext } from "react";

import { MainContext } from "./../context/MainContext";
export default function useAuthConfig() {
  const { accessToken } = useContext(MainContext);

  return {
    Authorization: `Bearer ${accessToken}`,
  };
}
