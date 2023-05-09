//import { useSignUpMutation } from '../store/services.js'
import './css/home.scss';
import HomePageProjects from '../components/homePageProjects.jsx'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <div>
            <div className='coloredSetion' style={{backgroundImage: 'url("./img/project1.jpeg"'}}>
                <div className='HomeFirstSectionWrapper'>
                    <div className='HomeAboutText'>
                        SIA MsGrupa <br />
                        Saules Panelu Uzstadina un elektromontazu darbi <br />
                        Tirgu kops 2017 gada <br />
                        <NavLink
                        to={`${process.env.PUBLIC_URL}/contacts`} > 
                            <button className='contactsBtn'>KONTAKTI</button>
                        </NavLink>
                    </div>
                    
                </div>
            </div>

            <div className='whiteSection'>
                <div className='solarPowerWorks'>
                    <h4 >Saules Paneļu Uzstādīšana</h4>
                    <p>Veicam Invertora iestatīšana un iestatījumus protokola sagatavošana.</p>
                    <p>Saules paneļu projektu pārbaudi, saules paneļu elektroinstalācijas mērijumus un parametru pārbaudi.</p>
                    <p>Kā arī veicam montāžu.</p>
                    <p>Sertificets speciālists.</p>
                </div>
                {/* <div className='pseudoEl'></div> */}
                <div className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPower.jpeg"'}}></div>
            </div>

            <div className='electritionWorksWrapper'>
            
            <div className='electritionWorksImg' style={{backgroundImage: 'url("./img/electroPower.jpg"'}}></div>
            {/* <div className='pseudoEl'></div> */}
            <div className='solarPowerWorks'>
                <h4>elektromontazu darbi</h4>
                <p>Energobūvniecība </p>
                <p>Projektēšana </p>
                <p>Vājstrāvas tīkli </p>
                <p>Elektroinstalācija </p>
                <p>Elektromobiļu uzlādes stacijas </p>
                <p>Zibensaizsardzība </p>
                <p>Elektromērījumi</p>
            </div>
           


        
            </div>

            <div className='MapSection'>
                <div className='flex'>
                    <div className='clientCount'>Mes parupejamies <br /> jau vairak par 120  <br /> klientiem</div>
                    <div className='clientCountProgressBar' style={{backgroundImage: 'url("./img/clientsBG.jpg"'}}>
                        <p>Saules Paneli uzstaditi</p>
                        <div className='progressBarOuter'><div className='progressBarInner fillProgressBar' ></div></div>
                        <p>Eletromontazas pakalpojumi</p>
                        <div className='progressBarOuter'><div className='progressBarInner fillProgressBar' ></div></div>
                    </div>
                </div>
                <br />
              <img className='LvmapImg' src="./img/LVmap.png" alt='LVmap'/>
            </div>

            <h2>MUSU CLIENTI</h2>
            <div className='homePageGallerySection'>
                
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project1.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project2.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project3.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project2.jpeg"}/>

               
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project2.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project3.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project1.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project2.jpeg"}/>


               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project2.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project2.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project3.jpeg"}/>
               <HomePageProjects header= {"Header"} bodyText={"body Text"}  imgName={"project1.jpeg"}/>
              
            </div>

            
        </div>
    )
}

export default Home;