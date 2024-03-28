import { createContext, useContext, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext([]);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favs, setFavs] = useState([])

  return (
    <ContextGlobal.Provider value={{favs , setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal1 = () => useContext(ContextGlobal)
