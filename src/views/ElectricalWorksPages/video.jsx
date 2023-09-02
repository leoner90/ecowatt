
import  {ElectroContentByLanguage, Prices} from "../MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {useEffect } from "react";
import textSpliter from "../js/textSplitter.js";
import PriceSection from "../../components/priceSection/priceSection.jsx";

function ElectricalWorks(props) {
  let content = ElectroContentByLanguage();
  let prices = Prices();

  useEffect(() => {
    props.setCurentDirName(content.ElectroVideoSectionHeader)
  },[props, content.ElectroVideoSectionHeader]);
  
  return (
    <div className='ElectricalWorksContentWrapper'> 
      <div className='ElectricalWorksText'>
        <h1> {<FontAwesomeIcon className='electroHeaderFontAwesome' icon={faLightbulb} />} {content.ElectroVideoSectionHeader}</h1>
        <div className="ElectricalWorksTextIself"> 
          { textSpliter(content.ElectroVideoSectionBody,  '\n')}
          <PriceSection price ={prices.CctvInstllPrice} name={content.ElectroVideoSectionHeader} />
        </div>
      </div>

      <div className='ElectricalWorksImg' >
        <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/video.jpg"   />
      </div>
    </div> 
  )
}

export default ElectricalWorks;