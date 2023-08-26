import './headerInfoBar.scss'
 
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../store/slices/settings'
import React, { useEffect } from "react";
import {setCookie, getCookie} from "./cookiesSetter.js"

function HeaderInfoBar() {
  const dispatch = useDispatch();
 
  function cookiesAgree() {
    setCookie('isCookiesAgreed' , true , 2, false);
    let el = document.querySelector("#cookiesID");
    el.classList.add('displayNone');  
  }
     
  let isCookiesAgreed = getCookie("isCookiesAgreed");
  let language = getCookie("currentLanguage");
      
  useEffect(()=>{
    dispatch(setLanguage(language));
  }, [language,dispatch]);
      
  return (
    <div  className='contactInfo'>
      <div className='languageBtn'  onClick={() => setCookie('currentLanguage' , 'ru' , 2,true)}>RU</div>
      <div className='languageBtn' onClick={() => setCookie('currentLanguage' , 'lv' , 2 , true)}>LV</div>
      <div id="cookiesID"  className={isCookiesAgreed ? 'displayNoneNoAnimation' : 'cookies'} >
        {language === 'ru'  ? 'Мы используем файлы cookie' :  'Mēs izmantojam sīkdatnes'}
        <button className='cookiesAgreeBtn' onClick={() => { cookiesAgree();}}>OK</button>
      </div>
    </div>
  )
}

export default HeaderInfoBar;