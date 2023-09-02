
import  {SolarContentByLanguage} from "../MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import { faSolarPanel  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useEffect } from "react";
import textSpliter from "../js/textSplitter.js";

function ElectricalWorks(props) {
  let content = SolarContentByLanguage();

  useEffect(() => {
    props.setCurentDirName(content.SolarSerteficatsSectionHeader)
  },[props, content.SolarSerteficatsSectionHeader]);

  return ( 
    <div className='ElectricalWorksContentWrapper'> 
      <div className='ElectricalWorksText'>
        <h1>{<FontAwesomeIcon className='solarHeaderFontAwesome' icon={faSolarPanel} />} {content.SolarSerteficatsSectionHeader}</h1>
        <div className="ElectricalWorksTextIself"> { textSpliter(content.SolarSerteficatsSectionBody,  '\n')}</div>
      </div>

      <div className='ElectricalWorksImg' >
        <img alt="" className="ElectricalWorksImgIself" src="../img/worksWeDo/sertificati.jpg"   />
      </div>
    </div> 
  )
}

export default ElectricalWorks;