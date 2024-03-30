import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal1 } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useContextGlobal1({})

  return (
    
    <main className={state.theme ? ' ' : 'dark'} >

      
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((item)=> 
        <Card key={item.id} item={item}/>)}
        
      </div>
    </main>
  )
}

export default Home