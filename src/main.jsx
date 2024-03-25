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
import { routes } from './utils/routes.js';

ReactDOM.createRoot(document.getElementById("root")).
// ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes> 
        <Route path='/' element={<App/>}>
          <Route path={routes.home} element={<Home/>} />
          <Route path={routes.contact} element={<Contact/>} />
          <Route path={routes.detail} element={<Detail/>} />
          <Route path={routes.favs} element={<Favs/>} />
        </Route>
        {/* RECUERDA DESARROLLAR EL ERRORCOMPONENT */}
        <Route path='*' element ={<ErrorComponent/>}/>
        

      </Routes>
      
    </BrowserRouter>
      
  </React.StrictMode>
);


