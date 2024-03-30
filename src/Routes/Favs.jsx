import React from "react";
import Card from "../Components/Card";
import { useContextGlobal1 } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal1({})
   

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={state.theme ? "card card-grid" : 'card-grid card dark'} >
        
        {state.favs.map((item)=> <Card key={item.id} item={item}/>)}
   
      </div>
    </>
  );
};

export default Favs;
