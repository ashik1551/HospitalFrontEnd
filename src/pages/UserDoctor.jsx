import React from 'react'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'
import { useParams } from 'react-router-dom'
import DoctorDetail from '../components/user/DoctorDetail'

function UserDoctor() {
  const { id } = useParams()
  return (
    <div>
      <div>
        <div className="mb-3"><Header></Header></div>
        <div className="mb-5">0</div>
        <div className="mb-3"><DoctorDetail doctorId={id}></DoctorDetail></div>
        <div className="mb-3"><Footer></Footer></div>
      </div>
    </div>
  )
}

export default UserDoctor