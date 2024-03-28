import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data , setData] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users` 
  axios(url)
  .then(res => setData(res.data))

  }, [])

  return (
    //Certificar esto
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data && data.map((item)=> <Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home