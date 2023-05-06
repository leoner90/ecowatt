import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Contacts from '../views/Contacts.jsx'
import Gallery from '../views/Gallery.jsx'
const Router = () => (
    <Routes basename={'/asd'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/Contacts`} element={<Contacts />} />
        <Route path={`${process.env.PUBLIC_URL}/Gallery`} element={<Gallery />} />
    </Routes>
)

export { Router };