import  {SolarContentByLanguage, Prices} from "../MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import {faSolarPanel} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {useEffect } from "react";
import textSpliter from "../js/textSplitter.js";
import PriceSection from "../../components/priceSection/priceSection.jsx";

function ElectricalWorks(props) {
  let content = SolarContentByLanguage();
  let prices = Prices();

  useEffect(() => {
    props.setCurentDirName(content.SolarSystemCheckSectionHeader)
  },[props, content.SolarSystemCheckSectionHeader]);
  
  return (
    <div className='ElectricalWorksContentWrapper'> 
      <div className='ElectricalWorksText'>
        <h1> {<FontAwesomeIcon className='solarHeaderFontAwesome' icon={faSolarPanel} />} {content.SolarSystemCheckSectionHeader}</h1>
        <div className="ElectricalWorksTextIself"> 
          { textSpliter(content.SolarSystemCheckSectionBody,  '\n')}
          <PriceSection price ={prices.SolarCheckPrice} name={content.SolarSystemCheckSectionHeader} />
        </div>
      </div>

      <div className='ElectricalWorksImg' >
        <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/parbaude.jpg"   />
      </div>
    </div> 
  )
}

export default ElectricalWorks;