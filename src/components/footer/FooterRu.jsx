import './footer.scss'
import Logo from '../header/Logo.jsx'
import React, { useEffect } from "react";
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SetObserver from '../../views/js/observer.js'
import {faCaretRight, faMobileScreenButton, faEnvelopesBulk, faMapLocationDot  } from '@fortawesome/free-solid-svg-icons'
import  {ContactsContentByLanguage, NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import { NavLink } from 'react-router-dom'
import textSpliter from "../../views/js/textSplitter.js";

function Footer() {
  let content = ContactsContentByLanguage();
  let navBarContent = NavBarContentByLanguage();
  function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
  }
  
  function linkGenerator(id, name){
    return (
      <NavLink to={id}    
      >
          {fontAwesome(faCaretRight, 'footeMenuFontAwesome')}
          {name}
      </NavLink>
    )
  }

  function observerCallBack(){
    document.getElementById('footerContacts').classList.add('animation');
  }

  useEffect(()=>{
    try {
      SetObserver('Footer', 0.2 , 0, observerCallBack);
    } catch (error) {
      observerCallBack();
    }
   
  }, []);

  function ContactSlot (icon, headerText, body) {
    let BodyText = textSpliter(body,  '\n');
    return (
      <div>
        <div className='footerContactSlotImg'>
          <FontAwesomeIcon className='contactsFontAwesome' icon={icon} />
        </div>
        <div className='footerContactSlotText'>
          <h4 className='footerContactSlotHeader'> {headerText} </h4>
          <div> {BodyText} </div>
        </div>
      </div>
    )
  }
  return (
    <div style={{position: 'relative'}}> 
        <video autoPlay muted loop id="myVideo" playsInline>
        {/* ${process.env.PUBLIC_URL} */}
            <source src={`./img/footer.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
    <div id="Footer" className="Footer" >
  
      {/* MENU */}
      <div className='footerNavBar'>
      
          {linkGenerator( '/' , navBarContent.homeLink )}
          {linkGenerator( 'solar/projectesana' , navBarContent.solarPanelLink)}
          {linkGenerator( 'electro/projectesana' , navBarContent.electroSectionLink)} 
          {linkGenerator( 'gallery' , navBarContent.galleryLink)}
          {linkGenerator( 'contacts' , navBarContent.contactsLink)}   
       
      </div>

 

      
      </div>
      <div className="footerImage" style={{backgroundImage: `url("./img/footerBg.png")`}}>
        <div id="footerContacts" className='footerContacts'>
          
          <div className='ContactsWrapper'> 
          
            {ContactSlot(faMobileScreenButton ,content.phone,'+371 2000 6560 \n \n +371 2592 7333')}
            {ContactSlot(faEnvelopesBulk ,content.mail,'ecowatt.riga@gmail.com')}
            {ContactSlot(faMapLocationDot ,content.address , 'Salaspils iela 10 , Rīga, LV-1057')}
    
          </div> 

          <div className='footerLogo'> 
            <Logo />
            {/* <p className='CompanyName'>ECO VATS</p> */}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Footer;