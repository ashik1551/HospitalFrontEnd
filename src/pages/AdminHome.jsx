import React from 'react'
import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
import Dashboard from '../components/admin/Dashboard'

function AdminHome() {
  return (
    <div>
        <div className="mb-3"><Header></Header></div>
        <div className="mb-5">0</div>
        <div className="mb-3"><Dashboard></Dashboard></div>
        <div className="mb-3"><Footer></Footer></div>
    </div>
  )
}

export default AdminHome