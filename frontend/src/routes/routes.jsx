import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/homePage'
import Navbar from '../components/navbarComponent'
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/navbar" element={<Navbar />} />
        </Routes>
    )
}