import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Contacts from '../views/Contacts.jsx'
import SolarPanel from '../views/SolarPanel.jsx'

import PROJEKTESANA from '../views/ElectricalWorksPages/PROJEKTESANA.jsx'
import ELEKTROINSTALĀCIJA from '../views/ElectricalWorksPages/ELEKTROINSTALĀCIJA.jsx'
import ELEKTROMĒRĪJUMI from '../views/ElectricalWorksPages/ELEKTROMĒRĪJUMI.jsx'
import ENERGOBŪVNIECĪBA from '../views/ElectricalWorksPages/ENERGOBŪVNIECĪBA.jsx'
import ENERGOEFEKTIVITĀTE from '../views/ElectricalWorksPages/ENERGOEFEKTIVITĀTE.jsx'
import ZIBENSAIZSARDZĪBA from '../views/ElectricalWorksPages/ZIBENSAIZSARDZĪBA.jsx'

const Router = () => (
    <Routes basename={'/asd'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/Contacts`} element={<Contacts />} />
        <Route path={`${process.env.PUBLIC_URL}/solarPanel`} element={<SolarPanel />} />

        <Route path={`${process.env.PUBLIC_URL}/PROJEKTESANA`} element={<PROJEKTESANA />} />
        <Route path={`${process.env.PUBLIC_URL}/ELEKTROINSTALĀCIJA`} element={<ELEKTROINSTALĀCIJA />} />
        <Route path={`${process.env.PUBLIC_URL}/ELEKTROMĒRĪJUMI`} element={<ELEKTROMĒRĪJUMI />} />
        <Route path={`${process.env.PUBLIC_URL}/ENERGOBŪVNIECĪBA`} element={<ENERGOBŪVNIECĪBA />} />
        <Route path={`${process.env.PUBLIC_URL}/ENERGOEFEKTIVITĀTE`} element={<ENERGOEFEKTIVITĀTE />} />
        <Route path={`${process.env.PUBLIC_URL}/ZIBENSAIZSARDZĪBA`} element={<ZIBENSAIZSARDZĪBA />} />        
    </Routes>
)

export { Router };