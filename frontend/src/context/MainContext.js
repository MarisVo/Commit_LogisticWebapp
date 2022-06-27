import { createContext, useState } from "react";

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [store, setStore] = useState([]);

  return (
    <MainContext.Provider value={{ store }}>{children}</MainContext.Provider>
  );
};

