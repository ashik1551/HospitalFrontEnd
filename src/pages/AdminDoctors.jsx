import React from 'react'
import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
import Specializtions from '../components/admin/Specializtions'

function AdminDoctors() {
  return (
    <div>
        <div className="mb-3"><Header></Header></div>
        <div className="mb-5">0</div>
        <div className="mb-3"><Specializtions></Specializtions></div>
        <div className="mb-3"><Footer></Footer></div>
    </div>
  )
}

export default AdminDoctors