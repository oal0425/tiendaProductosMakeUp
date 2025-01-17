import Hero from '../components/Hero/Hero';
import AcercaDelSitio from '../components/AcercaDelSitio/AcercaDelSitio';
import Knowledge from '../components/knowledge/Knowledge';
import Price from '../components/Price/Price';
import Testimony from '../components/Testimony/Testimony';
import Questions from '../components/Questions/Questions';



import arrow from "../assets/images/arrow.svg";
/* import rightArrow from "../assets/images/rightarrow.svg";
import leftArrow from "../assets/images/leftarrow.svg"; */
import "../components/Home/Home.css"




function Home() {
    return (
      <>
        <Hero/>
        <AcercaDelSitio/>
        <Knowledge/>
        <Price/>
        <Testimony/>
        <Questions/>    
      </>
      
  )
  }
  
  export default Home;
  