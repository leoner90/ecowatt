import { NavLink } from 'react-router-dom'
import  {NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";

function SubMenuSolar (props) {
  let LinksContent = NavBarContentByLanguage();

  function linkGenerator(id, name){
      return ( <NavLink to={`${process.env.PUBLIC_URL}/solar/${id}`} > {name} </NavLink> )
  }
 
  return (
    <div className='navBarLinksWrapper'>
      {linkGenerator('projectesana',  `${LinksContent.solarPanelSublink1}`)}
      {linkGenerator('montaza',  `${LinksContent.solarPanelSublink2}`)}
      {linkGenerator('invertors',  `${LinksContent.solarPanelSublink3}`)}
      {linkGenerator('parbaude', `${LinksContent.solarPanelSublink4}`)}
      {linkGenerator('nodosana',  `${LinksContent.solarPanelSublink5}`)}
      {linkGenerator('sertificati',  `${LinksContent.solarPanelSublink6}`)}
    </div>
  )
}

export default SubMenuSolar;