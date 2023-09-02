 import { NavLink } from 'react-router-dom'
import  {NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";

function SubMenu () {
  let LinksContent = NavBarContentByLanguage();

  function LinkGenerator(id, name){
    return ( <NavLink to={`${process.env.PUBLIC_URL}/electro/${id}`} > {name} </NavLink> )
  }

  return (
    <div className='navBarLinksWrapper'>
      {LinkGenerator('projectesana', `${LinksContent.electroSectionSublink1}`)}
      {LinkGenerator('elektroinstalacija', `${LinksContent.electroSectionSublink2}`)}
      {LinkGenerator('elektromerijumi', `${LinksContent.electroSectionSublink3}`)}
      {LinkGenerator('nodosana', `${LinksContent.electroSectionSublink4}`)}
      {LinkGenerator('video', `${LinksContent.electroSectionSublink5}`)}
      {LinkGenerator('gudramaja', `${LinksContent.electroSectionSublink6}`)}
      {LinkGenerator('zibesaizsardziba', `${LinksContent.electroSectionSublink7}`)}
    </div>
  )
}

export default SubMenu;