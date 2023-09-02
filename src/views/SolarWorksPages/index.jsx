import SubMenu from '../../components/subMenu/SubMenuSolar.jsx'
import { React , useState } from "react";
import { faCaretDown , faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {RouterSolar} from '../../router/index.js'
 
function ElectricalWorks() {
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(false);
  const [curentDirName, setCurentDirName] = useState('');

  function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
  }

  return (
    <div className="ElectricalWorksWrapper"> 
      <div className='mobileMenuWrapper' onClick={()=> {setExpandedMobileMenu(!expandedMobileMenu); } }> 
        {curentDirName}
        {expandedMobileMenu ? fontAwesome(faCaretUp,"faCaretDown") : fontAwesome(faCaretDown, "faCaretDown") } 

        <div className='mobileMenuShow'  style = { expandedMobileMenu ? {display: 'block'} : {display: 'none'} }>
          <SubMenu/>    
        </div>
      </div>
    
      <div className='DesctopMenuShow'>
        <SubMenu /> 
      </div>
         
      <RouterSolar setCurentDirName={setCurentDirName} />
    </div>
  )
}

export default ElectricalWorks;