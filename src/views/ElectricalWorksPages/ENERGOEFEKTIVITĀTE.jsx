
import { NavLink } from 'react-router-dom'

 function ElectricalWorks() {
 
    return (
        
        <div className="ElectricalWorksWrapper"> 

          <div className='navBarLinksWrapper'>
              <NavLink
                  to={`${process.env.PUBLIC_URL}/PROJEKTESANA`} >
                  PROJEKTESANA
              </NavLink>

              <NavLink
                to={`${process.env.PUBLIC_URL}/ENERGOBŪVNIECĪBA`}> 
                ENERGOBŪVNIECĪBA
              </NavLink>

              <NavLink
                to={`${process.env.PUBLIC_URL}/ENERGOEFEKTIVITĀTE`}> 
                ENERGOEFEKTIVITĀTE
              </NavLink>

              <NavLink
                to={`${process.env.PUBLIC_URL}/ELEKTROMĒRĪJUMI`} > 
                ELEKTROMĒRĪJUMI
              </NavLink>

              <NavLink
                to={`${process.env.PUBLIC_URL}/ZIBENSAIZSARDZĪBA`} >
                ZIBENSAIZSARDZĪBA
              </NavLink>

              <NavLink
                to={`${process.env.PUBLIC_URL}/ELEKTROINSTALĀCIJA`} >
                ELEKTROINSTALĀCIJA
              </NavLink>
            </div>
          <div className='ElectricalWorksContentWrapper'> 
            <div className='ElectricalWorksText'>
              <h1>ENERGOEFEKTIVITĀTE</h1>
              <p>SIA “TESLA” piedāvā veikt šādus projektēšanas darbus:</p>
              <p>Līdz 1kV kabeļu līniju projektēšana</p>
              <p>Līdz 1kV gaisvadu un piekarkabeļu elektropārvades līnijas projektēšana</p>
              <p>Elektropārvades kabeļlīniju no 1 līdz 20kV projektēšana</p> 
              <p>Gaisvadu un piekarkabeļu elektropārvades līniju no 1 līdz 20kV projektēšana</p>
              <p>1–20kV transformatoru apakšstaciju, komutācijas un sadales punktu projektēšana</p> 
              <p>Dzīvojamo un sabiedrisko ēku spēka un apgaismošanas elektroinstalācijas projektēšana</p>
              <p>Ražošanas ēku spēka un apgaismošanas elektroinstalācijas projektēšan</p>
              <p> Dīzeļelektrostacijas ar jaudu līdz 500kW projektēšana</p>
              <p>Būvju zibensaizsardzības pasīvās projektēšana</p>
              <p>Automātikas un elektroiekārtu vadības ietaises projektēšana</p>
              <p>Elektrisko staciju elektrisko daļu ar jaudu līdz 2MW projektēšana</p>
              <p>SIA “TESLA” nodarbojas ar elektroietaišu projektēšanu ietaisēs ar spriegumu līdz 20kV, kā arī veic AS “Sadales tīkls” projektēšanas darbus pēc privātpasūtījumiem kopš 2007. gada.</p>
            </div>
            <div className='ElectricalWorksImg' style={{backgroundImage: 'url("./img/projektesana.jpg"'}}></div>
          </div> 
        </div>
    )
}

export default ElectricalWorks;