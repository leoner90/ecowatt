
import  {ElectroContentByLanguage, Prices} from "../MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import { faLightbulb  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useEffect } from "react";
import textSpliter from "../js/textSplitter.js";
import PriceSection from "../../components/priceSection/priceSection.jsx";

 function ElectricalWorks(props) {
    let content = ElectroContentByLanguage();
    let prices = Prices();

    useEffect(() => {
      props.setCurentDirName(content.ElectroInstalSectionHeader)
    },[props,content.ElectroInstalSectionHeader]);

    return (
      
          <div className='ElectricalWorksContentWrapper'> 
            <div className='ElectricalWorksText'>
              <h1> {<FontAwesomeIcon className='electroHeaderFontAwesome' icon={faLightbulb} />} {content.ElectroInstalSectionHeader}</h1>
              <div className="ElectricalWorksTextIself"> { 
                textSpliter(content.ElectroInstalSectionBody,  '\n')}
                 <PriceSection price ={prices.ElectroBuildPrice} name={content.ElectroInstalSectionHeader} />
              </div>
            </div>
           
            <div className='ElectricalWorksImg' >
              <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/elektroinstalacija.jpg"   />
            </div>
          </div> 
       
    )
}

export default ElectricalWorks;