import  {SolarContentByLanguage, Prices} from "../MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import { faSolarPanel  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useEffect } from "react";
import textSpliter from "../js/textSplitter.js";
import PriceSection from "../../components/priceSection/priceSection.jsx";
 

 function ElectricalWorks(props) {
  let content = SolarContentByLanguage();
  let prices = Prices();

  useEffect(() => {
    props.setCurentDirName(content.SolarProjectSectionHeader)
  },[props, content.SolarProjectSectionHeader]);
  
    return (
      <div className='ElectricalWorksContentWrapper'> 
      <div className='ElectricalWorksText'>
        <h1>{<FontAwesomeIcon className='solarHeaderFontAwesome' icon={faSolarPanel} />}  {content.SolarProjectSectionHeader}</h1>
        <div className="ElectricalWorksTextIself"> 
          { textSpliter(content.SolarProjectSectionBody,  '\n')}
          <PriceSection price ={prices.SolarProjectPrice} name={content.SolarProjectSectionHeader} />
        </div>
      </div>
      <div className='ElectricalWorksImg' >
        <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/solarProjectesana.jpg"   />
      </div>
    </div> 
     
    )
}

export default ElectricalWorks;