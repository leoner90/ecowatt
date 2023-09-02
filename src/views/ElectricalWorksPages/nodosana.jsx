
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
    props.setCurentDirName(content.ElectroDeploySectionHeader)
  },[props, content.ElectroDeploySectionHeader]);
  
  return (
    <div className='ElectricalWorksContentWrapper'> 
      <div className='ElectricalWorksText'>
        <h1> {<FontAwesomeIcon className='electroHeaderFontAwesome' icon={faLightbulb} />} {content.ElectroDeploySectionHeader}</h1>
        <div className="ElectricalWorksTextIself"> 
          { textSpliter(content.ElectroDeploySectionBody,  '\n')}
          <PriceSection price ={prices.ElectroObjPassPrice} name={content.ElectroDeploySectionHeader} />
        </div>
      </div>

      <div className='ElectricalWorksImg' >
        <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/nodosanaElectro.jpg"   />
      </div>
    </div> 
  )
}

export default ElectricalWorks;