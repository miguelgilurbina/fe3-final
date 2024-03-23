import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ReactDOM } from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import Home from './Routes/Home.jsx';
import Contact from './Routes/Contact.jsx';
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx'
import ErrorComponent from './Routes/ErrorComponent.jsx'

ReactDOM.createRoot(document.getElementById("root")).
// ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes> 
        <Route path='/' element={<App/>}>
          <Route path='home' element={<Home/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='detail' element={<Detail/>} />
          <Route path='favs' element={<Favs/>} />
        </Route>
        <Route path='*' element ={<ErrorComponent/>}/>
        

      </Routes>
      
    </BrowserRouter>
      
  </React.StrictMode>
);


