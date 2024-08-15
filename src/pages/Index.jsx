import React from 'react'
import Header from '../components/index/Header'
import Carousels from '../components/index/Carousels'
import Footer from '../components/index/Footer'

function Index() {
  return (
    <div>
        
        <div className="mb-3"><Header></Header></div>
        <div className="mb-3"><Carousels></Carousels></div>
        <div className="mb-3"><Footer></Footer></div>
        
    </div>
  )
}

export default Index