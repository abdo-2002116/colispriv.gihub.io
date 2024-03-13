import Accordion from "./colisprive/Faq";
import Sulution from "./colisprive/Solutions";
import Card from "./colisprive/card";
import Contact from "./colisprive/contact/contact";
import Footer from "./colisprive/footer";
import Header from "./colisprive/header";
import ParticlesComponent from "./colisprive/particles";
import Protection from "./colisprive/protection";
import Result from "./colisprive/result";
import Sliderimage from "./colisprive/sliderimage";
import Sliderbrand from "./sliderbrand";

function Home() {
    return (<>
     <Header/>
    <Sliderimage/>
    <Result/>
    <Sulution/>
    <Card/>
    <Protection/>
    <Sliderbrand/> 
    <ParticlesComponent/>
    <Accordion/>
    <Contact/>
    <Footer/>
    
   
    {/* <Test/> */}
    </> 
      )
  }
  
  export default Home;