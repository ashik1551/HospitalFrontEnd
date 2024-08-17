import React from 'react'
import Header from '../components/admin/Header'
import Footer from '../components/index/Footer'
import Booking from '../components/admin/Booking'

function AdminBooking() {
  return (
    <div>
        <div className="mb-3"><Header></Header></div>
        <div className="mb-5">0</div>
        <div className="mb-3"><Booking></Booking></div>
        <div className="mb-3"><Footer></Footer></div>
    </div>
  )
}

export default AdminBooking