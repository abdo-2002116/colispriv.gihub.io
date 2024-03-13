import logo from './logo.svg';
import './index.css';
import Header from './colisprive/header';
import Sliderimage from './colisprive/sliderimage';
import Result from './colisprive/result';
import Sulution from './colisprive/Solutions';
import Test from './colisprive/test';
import Card from './colisprive/card';
import Protection from './colisprive/protection';
import Sliderbrand from './sliderbrand';

import ParticlesComponent from './colisprive/particles';
import Footer from './colisprive/footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './home';
import Creercompte from './colisprive/Créercompte/Créercompte';
import Contact from './colisprive/contact/contact';
import Accordion from './colisprive/Faq';

function App() {
  return (<>
   
   <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/creercompte' element={<Creercompte/>}/>
    <Route path='/'element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  
 
  {/* <Test/> */}
  </> 
    )
}

export default App;
