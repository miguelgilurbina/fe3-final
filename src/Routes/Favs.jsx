import React from "react";
import Card from "../Components/Card";
import { useContextGlobal1 } from "../Components/utils/global.context";
import { Link } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContextGlobal1({})
   

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={state.theme ? "" : 'dark'} >
        {state.favs.map((item)=> (
        <div className = "card " key={item.id} >
          <img className="card-img" src="/src/assets/doctor.jpg" alt="doctor img" />
          <Link to={`/detail/${item.id}`}><h2>{item.name}</h2></Link>
        </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
