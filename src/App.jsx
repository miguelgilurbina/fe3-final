
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route} from 'react-router-dom'
import Home from './Routes/Home.jsx';
import Contact from './Routes/Contact.jsx';
import Detail from './Routes/Detail.jsx';
import Favs from './Routes/Favs.jsx';
import { routes } from './utils/routes.js';
import { useContextGlobal1 } from "./Components/utils/global.context.jsx";




function App() {  

  const {state} = useContextGlobal1({})



  
  return (
      <div className={state.theme ? " " : 'dark'} >  
      <Navbar/>
   
      
      <Routes> 
          <Route path='/' element={<Home/>}/>
          {/* <Route path={routes.home} element={<Home/>} /> */}
          <Route path={routes.contact} element={<Contact/>} />
          <Route path={'/detail/:id'} element={<Detail/>} />
          <Route path={routes.favs} element={<Favs/>} />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
