 
import { NavLink } from 'react-router-dom'
import  {NavBarContentByLanguage} from "../../views/MultiLanguageContent/MultiLanguageContentGenerator.jsx";
// import React, { useState, useEffect } from "react";

function SubMenu (props) {
 
  let LinksContent = NavBarContentByLanguage();
  // function Done(name) {
   
  //   useEffect(() => {
  //    props.setCurentDirName(name)
  //   });
  //  }

   
 
  function LinkGenerator(id, name){
    return (
      <NavLink
      to={`${process.env.PUBLIC_URL}/electro/${id}`} 
     
      // className={({ isActive }) =>isActive ?  console.log(123) : ""}
   
      > {name}
      </NavLink>
    )
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