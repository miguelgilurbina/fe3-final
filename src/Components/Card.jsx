import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal1 } from "./utils/global.context";


const Card = ({item}) => {

  const {setFavs} = useContextGlobal1()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    




  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`./detail/`+ item.id}><h2>{item.name}</h2></Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={()=> setFavs((prevState) => [...prevState, item])} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
