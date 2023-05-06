import './footer.scss'
import { NavLink } from 'react-router-dom'
import Logo from './header/Logo.jsx'
function Footer() {
    return(
        // <div className="Footer" style={{backgroundImage: 'url("./img/footer.jpg"'}}>
        <div className="Footer" >
            <div className='footerContacts'>
                <center><Logo /></center><br/>
                
                +371 2672 2829<br />
                MsGrupa@info.com<br />
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
                <span className='FooterSlogan'>ZALA ENERGIJA</span>
            </div>
            

        
           
            

        </div>
    )
}

export default Footer;