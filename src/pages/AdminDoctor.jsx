import React, { useEffect } from 'react'
import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
import Doctors from '../components/admin/Doctors'
import { useParams } from 'react-router-dom'

function AdminDoctor() {

    const {id}=useParams()

  return (
    <div>
        <div className="mb-3"><Header></Header></div>
        <div className="mb-5">0</div>
        <div className="mb-3"><Doctors id={id}></Doctors></div>
        <div className="mb-3"><Footer></Footer></div>
    </div>
  )
}

export default AdminDoctor