import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal1 } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state} = useContextGlobal1({})
  const params = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'
  const [dentist, setDentist] = useState({})
  useEffect(()=>{

    axios(url+ params.id)
    .then(res => setDentist(res.data))

  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    
    <div className={state.theme ? ' ' : 'dark'} >
      
      
      <img className='card-img'src="/src/assets/doctor.jpg" alt="doctor image" />
      <table>
        <tbody>
          <tr>
            
            <td>Nombre</td>
            <td>Email</td>
            <td>Teléfono</td>
            <td>Website</td>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail