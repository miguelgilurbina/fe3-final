
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { Routes, Route} from 'react-router-dom'
import Home from './Routes/Home.jsx';
import Contact from './Routes/Contact.jsx';
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
import { routes } from './utils/routes.js';


function App() {
  return (
      <div className="App">  
      <Navbar/>
      <Outlet/>
      <Footer/>

      <Routes> 
        <Route path='/' element={<Home/>}>
          {/* <Route path={routes.home} element={<Home/>} /> */}
          <Route path={routes.contact} element={<Contact/>} />
          <Route path={routes.detail} element={<Detail/>} />
          <Route path={routes.favs} element={<Favs/>} />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
