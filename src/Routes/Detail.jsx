import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'
  const [dentist, setDentist] = useState({})
  useEffect(()=>{

    axios(url+ params.id)
    .then(res => setDentist(res.data))

  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    
    <div className='card'>
      <h1>{dentist.name}</h1>
      <h4>{dentist.email}</h4>
      <h4>{dentist.phone}</h4>
      <h4>{dentist.website}</h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail