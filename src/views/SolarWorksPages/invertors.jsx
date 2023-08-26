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
    props.setCurentDirName(content.SolarInvectorInstallSectionHeader)
  },[props, content.SolarInvectorInstallSectionHeader]);

    return (
      
      <div className='ElectricalWorksContentWrapper'> 
      <div className='ElectricalWorksText'>
        <h1> {<FontAwesomeIcon className='solarHeaderFontAwesome' icon={faSolarPanel} />} {content.SolarInvectorInstallSectionHeader}</h1>
        <div className="ElectricalWorksTextIself"> { textSpliter(content.SolarInvectorInstallSectionBody,  '\n')}
        <PriceSection price ={prices.SolarInvertorPrice} name={content.SolarInvectorInstallSectionHeader} />
               
              
               
        </div>
      </div>
         
            <div className='ElectricalWorksImg' >
              <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/invertors.jpg"   />
            </div>
          </div> 
       
    )
}

export default ElectricalWorks;