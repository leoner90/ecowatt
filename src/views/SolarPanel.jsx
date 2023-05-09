 

import HomePageProjects from '../components/homePageProjects.jsx'
import './css/solarPanel.scss'
function SolarPanel() {
 
    return (
        
        <div className="SolarPanel"> 

            <div className='coloredSetion' style={{backgroundImage: 'url("./img/project1.jpeg"'}}>
                <div className='HomeFirstSectionWrapper'>
                    <div className='HomeAboutText'>
                        SIA MsGrupa <br />
                        Saules Panelu Uzstadina <br />
                        Tirgu kops 2017 gada <br />
                        <button className='contactsBtn'>Pieteikties</button>
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


       

            <h3>Soli no strata lidz panelu uzstadisanas</h3>
            <div className='stepsToPerformSolarOrderWrapper'>
                
                <div>
                <center><img src='./img/priceList.png' alt="asd" width={100} /></center>

                    <h4>Piesakies un sanem piedavajumu</h4>
                    
                </div>
                <div>Nosledz ligumu</div>
                <div>Uzstadisana</div>
                <div>Enjoy you green energy</div>
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
            
               <div className='priceSectionWrapper'> 
                    <div>Cenu complekts 1</div>
                    <div>Cenu complekts 2</div>
                    <div>Cenu complekts 3</div>
               </div>
             

            <div className='whiteSection'>
               
               <div className='solarPanelContactFormWrapper'>
                <div className='solarPanelContactFormImg' style={{backgroundImage: 'url("./img/solarContactForm.png"'}}></div>
                <div className='solarPanelContactForm'>
                    <h3>Atstajiet Pieteikumu</h3>
                    <form>
                        <div className='NameSectionWrapper'>
                            <div className='NameLabel'>Vārds, Uzvārds *</div>
                            <div className='formFullNameWrapper'>
                                <input type="text"  id="fname" name="firstname" placeholder="Vārds" />
                                <input type="text"  id="lname" name="lastname" placeholder="Uzvārds" />
                            </div>
                            <br /> <br />
                            <div className='NameLabel'>Vārds, Uzvārds *</div>
                            <div className='formFullNameWrapper'>
                                <input type="text"  id="fname" name="firstname" placeholder="Vārds" />
                                <input type="text"  id="lname" name="lastname" placeholder="Uzvārds" />
                            </div>

                            <br /> <br />
                            <div className='NameLabel'>Vārds, Uzvārds *</div>
                            <div className='formFullNameWrapper'>
                                <input type="text"  id="fname" name="firstname" placeholder="Vārds" />
                                <input type="text"  id="lname" name="lastname" placeholder="Uzvārds" />
                            </div>

                            <br /> <br />
                            <div className='NameLabel'>Vārds, Uzvārds *</div>
                            <div className='formFullNameWrapper'>
                                <input type="text"  id="fname" name="firstname" placeholder="Vārds" />
                                <input type="text"  id="lname" name="lastname" placeholder="Uzvārds" />
                            </div>

                            
                        </div>
                    </form>
                </div>
               </div>
            </div>
        </div>
    )
}

export default SolarPanel;