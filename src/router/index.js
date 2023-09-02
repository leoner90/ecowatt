import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import Contacts from '../views/ContactsSection.jsx'
import Gallery from '../views/Gallery.jsx'

//SOLAR Landing
import SolarLandingPage from '../views/SolarWorksPages/index.jsx'
//Solar Content
import Projectesana from '../views/SolarWorksPages/projectesana.jsx'
import Invertors from '../views/SolarWorksPages/invertors.jsx'
import Parbaude from '../views/SolarWorksPages/parbaude.jsx'
import Montaza from '../views/SolarWorksPages/montaza.jsx'
import Nodosana from '../views/SolarWorksPages/nodosana.jsx'
import Sertificati from '../views/SolarWorksPages/sertificati.jsx'
import PageNotFound from '../views/PageNotFound.jsx'

// ELECTRO Landing
import ElectroLandingPage from '../views/ElectricalWorksPages/index.jsx'
//ELECTRO Content
import ProjectesanaElectro from '../views/ElectricalWorksPages/projectesana.jsx'
import Elektroinstalacija from '../views/ElectricalWorksPages/elektroinstalacija.jsx'
import Elektromerijumi from '../views/ElectricalWorksPages/elektromerijumi.jsx'
import NodosanaElectro from '../views/ElectricalWorksPages/nodosana.jsx'
import Video from '../views/ElectricalWorksPages/video.jsx'
import Gudramaja from '../views/ElectricalWorksPages/gudramaja.jsx'
import Zibesaizsardziba from '../views/ElectricalWorksPages/zibesaizsardziba.jsx'

const Router = () => (
    <Routes basename={`${process.env.PUBLIC_URL}`}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<PageNotFound />} />
        <Route path={`${process.env.PUBLIC_URL}/contacts`} element={<Contacts />} />
        <Route path={`${process.env.PUBLIC_URL}/gallery`} element={<Gallery />} />     
        <Route path={`${process.env.PUBLIC_URL}/solar/*`} element={<SolarLandingPage />} />
        <Route path={`${process.env.PUBLIC_URL}/electro/*`} element={<ElectroLandingPage />} />
    </Routes>
)

const RouterElectro = (props) => (
    <Routes basename={`/electro`}>
        <Route path={`/projectesana`} element={<ProjectesanaElectro  setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/*`} element={<PageNotFound />} />
        <Route path={`/elektroinstalacija`} element={<Elektroinstalacija setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/elektromerijumi`} element={<Elektromerijumi setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/nodosana`} element={<NodosanaElectro setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/video`} element={<Video setCurentDirName = {props.setCurentDirName}/>} />        
        <Route path={`/gudramaja`} element={<Gudramaja setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/zibesaizsardziba`} element={<Zibesaizsardziba  setCurentDirName = {props.setCurentDirName}/>} />
    </Routes>
)

const RouterSolar = (props) => (
    <Routes basename={`/solar`}>
        <Route path={`/projectesana`} element={<Projectesana setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/*`} element={<PageNotFound setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/invertors`} element={<Invertors setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/parbaude`} element={<Parbaude setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/montaza`} element={<Montaza setCurentDirName = {props.setCurentDirName}/>} />
        <Route path={`/nodosana`} element={<Nodosana setCurentDirName = {props.setCurentDirName}/>} />        
        <Route path={`/sertificati`} element={<Sertificati setCurentDirName = {props.setCurentDirName}/>} />
    </Routes>
)

export {Router, RouterElectro, RouterSolar};