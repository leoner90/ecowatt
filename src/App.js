import { Router } from './router/index'
import NavBar from './components/header/NavBar.jsx'
import Footer from './components/footer/FooterRu.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import { useState } from "react";

function App() {
  const [showdropdownElectro, setShowdropdownElectro] = useState(false);
  const [showdropdownSolar, setShowdropdownSolar] = useState(false);
 
  return (
    <div className="App" >
      <div>
        <NavBar 
          setShowdropdownElectro = {setShowdropdownElectro} showdropdownElectro={showdropdownElectro}
          showdropdownSolar = {showdropdownSolar} setShowdropdownSolar={setShowdropdownSolar}
        />
        <div id="BodyWrapper" className='BodyWrapper' onClick={()=>{ setShowdropdownElectro(false); setShowdropdownSolar(false) }}>
          <Router />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;