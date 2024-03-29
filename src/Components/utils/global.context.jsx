import axios from "axios";
import { createContext, useContext, useReducer , useEffect } from "react";
import { reducer } from "../../reducer/reducer";

export const initialState = {
  theme: true,
   data: [],
   favs: []
  }

export const ContextGlobal = createContext([]);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users` 
  axios(url)
  .then(res => dispatch({type: 'GET_DATA', payload: res.data}))

  }, [])
 

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal1 = () => useContext(ContextGlobal)
