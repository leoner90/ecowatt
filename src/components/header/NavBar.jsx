import './css/header.scss';
import { NavLink } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Logo from './Logo.jsx'
import React, { useEffect } from "react";

function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
}
 

function NavBar() {
    const [navbarStatus, setNavbarStatus] = useState('');
    function showMobileNavBar() {
        if (window.innerWidth < 800) {
            if (navbarStatus !== 'flex') {
                setNavbarStatus('flex')
            } else {
                setNavbarStatus('')
            }
        }
    }
    useEffect(()=>{
        const el = document.querySelector(".NavBarWrapper");
        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("not-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
          );
          
          observer.observe(el);
});
    return (        
        <div className='NavBarWrapper'>
            
            <div className='MenuShowHideBtn'
                onClick={() => showMobileNavBar()}
            >
                {fontAwesome(faBars)}
            </div>
            <div className='NavBar' style={{ display: navbarStatus }}>
                <Logo />
                <div className='CompanyName'> MSGrupa</div>
                <div className='MenuShowHideBtn' onClick={() => showMobileNavBar()} >
                    {fontAwesome(faBars)}
                </div>
                <div className='navBarLinksWrapper'>
                    <NavLink
                        to={`${process.env.PUBLIC_URL}/`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }} >
                        PAR MUMS
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/Gallery`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }}> ELEKTROMONTAZ
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/prices`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }}> SAULES PANELI
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/contacts`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }}> KONTAKTI
                    </NavLink>

                    <NavLink
                    to={`${process.env.PUBLIC_URL}/prices`} onClick={() => { showMobileNavBar(); window.scrollTo(0, 0); }}>
                        <button>APREKINAT IZMAKSAS</button>
                    </NavLink>
                </div>


                
            </div>
        </div>
    )
}

export default NavBar;