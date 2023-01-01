import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HotelContent from './hotel'
import VolContent from './vols'

const GuestPage = () => {
  return (
    <Routes>
        <Route index element={<VolContent />} />
        <Route path="/hotel" element={<HotelContent />} />
    </Routes>
  )
}

export default GuestPage