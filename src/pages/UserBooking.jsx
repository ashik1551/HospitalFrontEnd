import React from 'react'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'
import Bookinglist from '../components/user/Bookinglist'

function UserBooking() {
    return (
        <div>
            <div>
                <div className="mb-3"><Header></Header></div>
                <div className="mb-5">0</div>
                <div className="mb-3"><Bookinglist></Bookinglist></div>
                <div className="mb-3"><Footer></Footer></div>
            </div>
        </div>
    )
}

export default UserBooking