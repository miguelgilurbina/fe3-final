
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from '/Routes/Contact'
import { Outlet } from "react-router-dom";
import {Link} from 'react-router-dom'

function App() {
  return (
      <div className="App">
        
        <Navbar/>
          <Outlet>
            <Home/>
            <Contact/>
            <Detail/>
            <Favs/>
          </Outlet>
        <Footer/>


      </div>
  );
}

export default App;
