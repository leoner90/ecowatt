import './header.scss';
import { NavLink } from 'react-router-dom'
import { faBars ,faCaretDown , faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Logo from './Logo.jsx'
import React, { useEffect } from "react";
import HeaderInfoBar from '../headerInfoBar/headerInfoBar.jsx'
import { useLocation } from 'react-router-dom';
import  {NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";

function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
}

function NavBar(props) {
    const [navbarStatus, setNavbarStatus] = useState('');
    let location = useLocation();
    let content = NavBarContentByLanguage();

    function linkGenerator(id, name){
        return (
            <NavLink to={`${process.env.PUBLIC_URL}/${id}`} onClick={() => { props.setShowdropdownElectro(false);  props.setShowdropdownSolar(false); showMobileNavBar();}} >
                {name}
            </NavLink>
        )
    }
    
    
    function showMobileNavBar() {
        if (window.innerWidth < 992) {
            if (navbarStatus !== 'flex') {
                setNavbarStatus('flex')
                document.getElementById("html").style.overflow = "hidden";
            } else {
                setNavbarStatus('')
                document.getElementById("html").style.overflow = "auto";
            }
        }
    }

    React.useEffect(() => {
        function setOverflowControll() {
            if (window.innerWidth > 992) {
                document.getElementById("html").style.overflow = "auto";
            } else if (navbarStatus === 'flex') {
                document.getElementById("html").style.overflow = "hidden";
            } else if (navbarStatus !== 'flex') {
                document.getElementById("html").style.overflow = "auto";
            }   
        }
        window.addEventListener('resize', setOverflowControll)
    })

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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
            {/* Mobile BAR */}
            <div className='MenuShowHideBtn' > 
                <span onClick={() => showMobileNavBar()}>{fontAwesome(faBars)}  </span>
                <HeaderInfoBar /> 
            </div>

            {/* mainbar */}
            <div className='NavBar' style={{ display: navbarStatus }}>
                <div className='mobileHide'><Logo /> </div>
                      
                <div className='MenuShowHideBtn' > 
                    <span onClick={() => showMobileNavBar()}>{fontAwesome(faBars)}  </span>
                </div>

                <div className='navBarLinksWrapper'>
                    {/* <Logo /> */}
                    {linkGenerator('',  `${content.homeLink}`)}
                    <div className='dropDownMenu' >
                        
                        <span className='fakeLink' onClick={()=> { props.setShowdropdownElectro(!props.showdropdownElectro); props.setShowdropdownSolar(false)}}> 
                            {content.electroSectionLink}
                            {props.showdropdownElectro ? fontAwesome(faCaretUp,"faCaretDown") : fontAwesome(faCaretDown, "faCaretDown") }
                        </span>

                        <div className='dropDownItself' style={props.showdropdownElectro ?{ display: 'block'} :{ display: 'none'}}>
                            <div className='navBarLinksWrapper'>
                                {linkGenerator('electro/projectesana', `${content.electroSectionSublink1}`)}
                                {linkGenerator('electro/elektroinstalacija', `${content.electroSectionSublink2}`)}
                                {linkGenerator('electro/elektromerijumi', `${content.electroSectionSublink3}`)}
                                {linkGenerator('electro/nodosana', `${content.electroSectionSublink4}`)}
                                {linkGenerator('electro/video', `${content.electroSectionSublink5}`)}
                                {linkGenerator('electro/gudramaja', `${content.electroSectionSublink6}`)}
                                {linkGenerator('electro/zibesaizsardziba', `${content.electroSectionSublink7}`)}
                            </div>
                        </div>
                    </div>

                    <div className='dropDownMenu' >
                        <span className='fakeLink'  onClick={()=>  {props.setShowdropdownSolar(!props.showdropdownSolar); props.setShowdropdownElectro(false)}}> 
                            {content.solarPanelLink}
                            {props.showdropdownSolar ? fontAwesome(faCaretUp,"faCaretDown") : fontAwesome(faCaretDown, "faCaretDown") }
                        </span>
                        <div className='dropDownItself' style={props.showdropdownSolar ?{ display: 'block'} :{ display: 'none'}}>
                            <div className='navBarLinksWrapper'>
                                {linkGenerator('solar/projectesana', `${content.solarPanelSublink1}`)}
                                {linkGenerator('solar/montaza',  `${content.solarPanelSublink2}`)}
                                {linkGenerator('solar/invertors',  `${content.solarPanelSublink3}`)}
                                {linkGenerator('solar/parbaude',  `${content.solarPanelSublink4}`)}
                                {linkGenerator('solar/nodosana',  `${content.solarPanelSublink5}`)}
                                {linkGenerator('solar/sertificati',  `${content.solarPanelSublink6}`)}
                            </div>
                        </div>
                    </div>
                    
                    {linkGenerator('gallery', `${content.galleryLink}`)}
                    {linkGenerator('contacts', <button className='contactsBtn'>{content.contactsLink}</button>)}   
                </div>
                <div className='mobileHide'><HeaderInfoBar /></div>
            </div>
        </div>
    )
}

export default NavBar;