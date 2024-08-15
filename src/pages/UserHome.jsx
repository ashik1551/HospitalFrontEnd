import React from 'react'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'
import DoctorList from '../components/user/DoctorList'
import Carousels from '../components/index/Carousels'

function UserHome() {
  return (
    <div>
        <div className="mb-3"><Header></Header></div>
        <div className="my-5"><Carousels></Carousels></div>
        <div className="mb-3"><DoctorList></DoctorList></div>
        <div className="mb-3"><Footer></Footer></div>
    </div>
  )
}

export default UserHome