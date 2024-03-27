import React from 'react'
import { routes } from '../utils/routes'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick= {()=> navigate (-1)}>Go Back</button>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.detail}>Detail</Link>
      <Link to={routes.favs}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </div>
  )
}

export default Navbar