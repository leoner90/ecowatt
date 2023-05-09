import './footer.scss'
import { NavLink } from 'react-router-dom'
import Logo from './header/Logo.jsx'
import React, { useEffect } from "react";
function Footer() {

 
      
    

      let callback = function(entries, observer) {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animation');
          } 
        });

 
    };
      
      let options = {
        root: document.querySelector("#footerContacts"),
        rootMargin: "0px",
        threshold: 1.0,
      };
      
      let observer = new IntersectionObserver(callback, options);
  

      useEffect(()=>{
      let target = document.querySelector("#footerContacts");
      observer.observe(target);
    });

    return(
        // <div className="Footer" style={{backgroundImage: 'url("./img/footer.jpg"'}}>
        <div id="Footer" className="Footer" >
            <div id="footerContacts" className='footerContacts'>
                <center><Logo /></center><br/>
                
                +371 2672 2829<br />
                info@msgrupa.lv  <br />
                Rīga, Festivāla iela 1 - 38, LV-1057
            </div>
            <div className='footerNavBar'>
                    <NavLink
                        to={`${process.env.PUBLIC_URL}/`}>
                        PAR MUMS
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/about`} > MŪSU DARBI
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/prices`} > CENRĀDIS
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/contacts`} > KONTAKTI
                    </NavLink>
            </div>
            <div  className="footerImage" style={{backgroundImage: `url("logo2.png")`}}>
              <img src='wing1.png' className=" wing1" alt='footerSpiningImg'></img>
                <span className='FooterSlogan'>ZALA ENERGIJA</span>
            </div>
            

        
           
            

        </div>
    )
}

export default Footer;