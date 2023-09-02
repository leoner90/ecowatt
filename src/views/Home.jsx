import './css/homePage/index.scss';
import { NavLink } from 'react-router-dom'
import SetObserver from './js/observer.js'
import React, {useState, useEffect } from "react";
import  {HomePageContentByLanguage, NavBarContentByLanguage, Prices} from "./MultiLanguageContent/MultiLanguageContentGenerator.jsx";
import {faEuroSign, faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Home() {
    let content = HomePageContentByLanguage();
    let LinksContent = NavBarContentByLanguage();
    let prices = Prices();
    const [solarProjects, SetSolarProjects] = useState(0);
    const [electroProjects, SetElectroProjects] = useState(0);
    const [totalClientsCount, setTotalClientsCount] = useState(0);
    const [isObservedSolarPrices, setIsObservedSolarPrices] = useState(false);
    const [isObservedElectroPrices, setIsObservedElectroPrices] = useState(false);

    function fontAwesome(value, className) {
        return <FontAwesomeIcon className={className} icon={value} />
    }

    function worksWeDoGenerator(linkID, imglink, name , leftImgLink, worksWeDoGeneratorlogoImg,isSunSection , ) {
        return (
            <NavLink to={`${process.env.PUBLIC_URL}/${linkID}`}>
                <div className='worksWeDoGeneratorWrapper' to={`${process.env.PUBLIC_URL}/${linkID}`}   onClick={() => {window.scrollTo(0, 0);}}>
                    <div className='worksWeDoGeneratorlogo' style={isSunSection ? {backgroundImage: 'url("./img/'+worksWeDoGeneratorlogoImg+'")'} : {}}>
                        {isSunSection ?  <div className='sunWrapper'> <div className="sun"></div></div> : ''  }
                        <div className='worksWedoImgWrapper'>
                            <img className='worksWeDoImg' src={"./img/"+leftImgLink}  alt='' />
                        </div>
                        
                        <div className='arrowWrapper'>
                            <div className="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
        
                    <div className='worksWeDoGeneratorBody' >
                        <div className='worksWeDoGeneratorBodyImg' style={{backgroundImage: 'url("./img/worksWeDo/'+ imglink +'.jpg")'}}></div>
                        <h4 className='worksWeDoGeneratorHeader'>{name} </h4>
                    </div>
                </div>
            </NavLink>
        )
    }



    useEffect(()=>{
        function counterIncrease(i, maxVal, callBackSetter) {
            //2000 - 2 sec animationa time in css for progress bar
            //calltime how often recursive fun is called
            //k how many times recursive fun will be called in 2 sec time
            //i = increase each call by max Value divided by k , so any number passed will be finished in same time of 2 sec
            let calltime = 50;
            let k = 2000 / calltime;
            callBackSetter(parseInt(i));
            i = i + maxVal / k;
            if (i <= maxVal) {
            setTimeout(function() {counterIncrease(i, maxVal, callBackSetter)}, calltime);
            } 
        }

        function observerCallBack(){
            counterIncrease(0, 5000, SetSolarProjects );
            counterIncrease(0, 600, SetElectroProjects );
            counterIncrease(0, 250, setTotalClientsCount );
        }

        function observerCallBack2(){
            setIsObservedSolarPrices(true);
        }

        function electroPricesObserverCallBack(){
            setIsObservedElectroPrices(true);
        }

        try {
            SetObserver('stepsContentWrapper', 0.3 , 0, observerCallBack);
            SetObserver('solarPrices', 0.3 , 0, observerCallBack2);
            SetObserver('electroPrices', 0.3 , 0, electroPricesObserverCallBack);
        } 
        catch (error) {
            observerCallBack();
            observerCallBack2();
            electroPricesObserverCallBack();
        }
    }, []);


    function priceBlock(name , price) {
        return (
            <div  className=  'priceBlock'  >
                <p className='priceHeader'>{fontAwesome(faCheck, 'priceHeaderSvg')} {name}</p>
                <p className='priceItself'>No {price} {fontAwesome(faEuroSign, 'euroSignSvg')}   </p>
            </div>
        )
    }

    function svgGenerator(classofSvg){
        return (
            <svg className={classofSvg}   version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M-5 100 Q 0 20 5 100 Z
                    M0 100 Q 5 0 10 100
                    M5 100 Q 10 30 15 100
                    M10 100 Q 15 10 20 100
                    M15 100 Q 20 30 25 100
                    M20 100 Q 25 -10 30 100
                    M25 100 Q 30 10 35 100
                    M30 100 Q 35 30 40 100
                    M35 100 Q 40 10 45 100
                    M40 100 Q 45 50 50 100
                    M45 100 Q 50 20 55 100
                    M50 100 Q 55 40 60 100
                    M55 100 Q 60 60 65 100
                    M60 100 Q 65 50 70 100
                    M65 100 Q 70 20 75 100
                    M70 100 Q 75 45 80 100
                    M75 100 Q 80 30 85 100
                    M80 100 Q 85 20 90 100
                    M85 100 Q 90 50 95 100
                    M90 100 Q 95 25 100 100
                    M95 100 Q 100 15 105 100 Z"
                >
                </path>
            </svg>
        )
    }

    return (
        <div className='homeWrapper'>
            <div className='firstSection' >
                <video autoPlay muted loop id="myVideo" playsInline >
                    <source src="./img/header.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="dimmer"></div>
                
                <div className='HomeFirstSectionWrapper'>
                    <div className='HomeAboutText'>
                        <h1 className='MainSlogan'>SIA EcoWatt </h1>
                        <h2 className='subSlogan'>{content.subSlogan}</h2>   
                        <NavLink to={`${process.env.PUBLIC_URL}/contacts`} > 
                            <span className='contactsBtnAbout'>{content.btn}</span>
                        </NavLink>
                    </div>
                </div>

                <div className='HeaderSubNavigation'>
                   <div> <NavLink to={`${process.env.PUBLIC_URL}/solar/projectesana`} > {content.headerLink1} </NavLink> </div> 
                   <div> <NavLink to={`${process.env.PUBLIC_URL}/electro/projectesana`} > {content.headerLink2} </NavLink> </div> 
                   <div> <NavLink to={`${process.env.PUBLIC_URL}/contacts`} > {content.headerLink3} </NavLink> </div>                   
                </div>
            </div>

        
            <div className='SolarWorksWrapperImg' style={{backgroundImage: 'url("./img/solarBg.jpg")'}} >
                <div className='solarWorksWrapper'>
                    <div className="ribbon">
                        <h4 className='SolarSectionHeader'>{content.solarSectionHeader}</h4> 
                        <i></i> <i></i> <i></i> <i></i>
                    </div>      
                
                    <div className='solarBody'>
                        <div className='solarPowerContentWrapper'>
                            {worksWeDoGenerator('solar/projectesana', 'solarProjectesana',  `${LinksContent.solarPanelSublink1}` , 'solarpanel.png' , 'skyBg.jpg', true)}
                            {worksWeDoGenerator('solar/montaza', 'montaza', `${LinksContent.solarPanelSublink2}`  , 'solarpanel.png', 'skyBg.jpg', true)}
                            {worksWeDoGenerator('solar/invertors', 'invertors', `${LinksContent.solarPanelSublink3}`  , 'solarpanel.png', 'skyBg.jpg', true)}
                            {worksWeDoGenerator('solar/parbaude', 'parbaude', `${LinksContent.solarPanelSublink4}`  , 'solarpanel.png', 'skyBg.jpg', true)}
                            {worksWeDoGenerator('solar/nodosana', 'solarNodosana', `${LinksContent.solarPanelSublink5}`  , 'solarpanel.png', 'skyBg.jpg', true)}
                            {worksWeDoGenerator('solar/sertificati', 'sertificati', `${LinksContent.solarPanelSublink6}`  , 'solarpanel.png', 'skyBg.jpg', true)}
                        </div>
                    </div>
                 
                
                    <div id="solarPrices" className= {isObservedSolarPrices ? 'priceBlockAnimationObserver pricesWrapper' : 'pricesWrapper ' }  >
                        <div className='priceLeftSide'>{content.priceTableLeftSidebar}</div>
                        <div  className='priceRightSide'>
                            {priceBlock(`${LinksContent.solarPanelSublink1}`, prices.SolarProjectPrice)}
                            {priceBlock(`${LinksContent.solarPanelSublink2}`, prices.SolarBuildPrice)}
                            {priceBlock(`${LinksContent.solarPanelSublink3}`, prices.SolarInvertorPrice)}
                            {priceBlock(`${LinksContent.solarPanelSublink4}`, prices.SolarCheckPrice)}
                            {priceBlock(`${LinksContent.solarPanelSublink5}` , prices.SolarObjPassPrice)}         
                        </div>
                    </div>
                </div>
                {svgGenerator('cloudsNormal clouds')}
            </div>
         
       
            <div className='ElectroWorksWeDoWrapper' style={{backgroundImage: 'url("./img/electroBg.jpg")'}}>
                <div className="ribbon">
                    <h4 className='ElectroSectionHeader'>{content.electroSectionHeader} </h4>
                    <i></i><i></i> <i></i> <i></i>
                </div>      
            
                <div className='electritionBody'>
                    <div className='electrikContent'>
                        <div className='electroPowerContentWrapper'>
                            {worksWeDoGenerator('electro/projectesana', 'projectesana', `${LinksContent.electroSectionSublink1}` , 'test.gif' , 'test2.gif', false )}
                            {worksWeDoGenerator('electro/elektroinstalacija', 'elektroinstalacija', `${LinksContent.electroSectionSublink2}` , 'test.gif' , 'test2.gif', false)}
                            {worksWeDoGenerator('electro/elektromerijumi', 'elektromerijumi', `${LinksContent.electroSectionSublink3}` , 'test.gif' , 'test2.gif', false)}
                            {worksWeDoGenerator('electro/nodosana', 'nodosanaElectro', `${LinksContent.electroSectionSublink4}` , 'test.gif' , 'test2.gif', false)}
                            {worksWeDoGenerator('electro/video', 'video', `${LinksContent.electroSectionSublink5}` , 'test.gif' , 'test2.gif', false)}
                            {worksWeDoGenerator('electro/gudramaja', 'gudramaja',`${LinksContent.electroSectionSublink6}` , 'test.gif' , 'test2.gif', false)}
                            {worksWeDoGenerator('electro/zibesaizsardziba', 'zibesaizsardziba', `${LinksContent.electroSectionSublink7}` , 'test.gif' , 'test2.gif', false)}
                        </div>
                    </div>
                </div>
                 
                <div id="electroPrices" className= {isObservedElectroPrices ? 'priceBlockAnimationObserver pricesWrapper' : 'pricesWrapper' }  >
                    <div className='priceLeftSide'>{content.priceTableLeftSidebar}</div>
                    <div  className='priceRightSide'>
                        {priceBlock(`${LinksContent.electroSectionSublink1}`, prices.ElectroProjectPrice)}
                        {priceBlock(`${LinksContent.electroSectionSublink2}`, prices.ElectroBuildPrice)}
                        {priceBlock(`${LinksContent.electroSectionSublink3}`, prices.ElectroMeasurementsPrice)}
                        {priceBlock(`${LinksContent.electroSectionSublink4}`, prices.ElectroObjPassPrice)}
                        {priceBlock(`${LinksContent.electroSectionSublink5}` , prices.CctvInstllPrice)} 
                        {priceBlock(`${LinksContent.electroSectionSublink6}` , prices.smarHomePrice)} 
                        {priceBlock(`${LinksContent.electroSectionSublink7}` , prices.lightningProtectionPrice)} 
                    </div>
                </div>    
            </div>
      
            {svgGenerator('cloudsReverse clouds')}
            
            <div id="stepsContentWrapper" className='MapSection'>
                <div className="ribbon">
                    <h4 className='ElectroSectionHeader'>{content.resultSectionHeader} </h4>
                    <i></i><i></i> <i></i> <i></i>
                </div> 
                              
                <div className='clientCountWrapper'>
                    <div className='clientCountImg'  style={{backgroundImage: 'url("./img/worker.jpg"'}}></div>
                    <div className='clientCountRightSide'>
                        <div className='clientCountRightSidePiece'>
                            <img className='clientCountRightSideImg' src='./img/solarSvg.svg' alt='' />
                            <div className='clientCountRightSideContent'>
                                <h2 className='clientCountRightSideHeader'>{content.resultSolarWorksDone} </h2>
                                <p className='WorkCountNumber'> {solarProjects} +</p>
                            </div>     
                        </div>
                       
                        <div className='clientCountRightSidePiece'>
                            <img className='clientCountRightSideImg' src='./img/montazSvg.svg' alt='' />
                            <div className='clientCountRightSideContent'>
                                <h2 className='clientCountRightSideHeader'>{content.resultElectroWorksDone}  </h2>
                                <p className='WorkCountNumber'> {electroProjects} +</p> 
                            </div>
                        </div>

                        <div className='clientCountRightSidePiece'>
                            <img className='clientCountRightSideImg' src='./img/clientSvg.svg' alt='' />
                            <div className='clientCountRightSideContent'>
                                <h2 className='clientCountRightSideHeader'> {content.resultClientCount}  </h2>
                                <p className='WorkCountNumber'> {totalClientsCount} +</p> 
                            </div>                     
                        </div>
                    </div>
                </div>            
            </div>  
        </div>
    )
}

export default Home;