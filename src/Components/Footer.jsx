import React from 'react'
import { useContextGlobal1 } from './utils/global.context'

const Footer = () => {
  const {state} = useContextGlobal1({})
  return (
    <footer className={state.theme ? ' ' : 'dark'}>
      <div className='div-logo'>
        <p>Powered by</p>
        <img className='logo' src="/src/assets/DH.png" alt='DH-logo' />
      </div>
      <div className='footer-icons'>
        <a href=""><img  src="/src/assets/ico-facebook.png" alt="facebook" /></a>
        <a href=""><img  src="/src/assets/ico-instagram.png" alt="instagram" /></a>
        <a href=""><img  src="/src/assets/ico-tiktok.png" alt="tiktok" /></a>
        <a href=""><img  src="/src/assets/ico-whatsapp.png" alt="whatsapp" /></a>
      </div>
        
       
    </footer>
  )
}

export default Footer
