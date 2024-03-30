import React from 'react'
import { routes } from '../utils/routes'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContextGlobal1 } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal1({})
  const navigate = useNavigate()
  

  return (
    <div className= {state.theme ? "navbar " : "navbar dark"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick= {()=> navigate (-1)}>Go Back</button>
      <button onClick ={ () => dispatch({type: 'CHANGE_THEME', payload: false  })}>Change theme</button>
      
    </div>
  )
}

export default Navbar