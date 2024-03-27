import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const theme = [dark, light]

  const params = useParams()
  const [dentista, setDentista] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users/:${params.id}`
  useEffect = () => {

    axios(url)
    .then(res => setDentista(res.dentista))
  }, [];
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <h1>Detail Dentist id </h1>
      {dentista && <Card key={dentista.id}/>}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail