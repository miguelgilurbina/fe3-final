import React from "react";
import { Link } from "react-router-dom";


const Card = ({item}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    




  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`./detail/${item.id}`}><h3>{item.name}</h3></Link>
        <h4>{item.email}</h4>
        <h4>{item.phone}</h4>
        <h4>{item.website}</h4>    
       


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
