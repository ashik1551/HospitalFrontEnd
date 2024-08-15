import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getBookingList } from '../../services/api';

function Bookinglist() {

    const [booking,setBooking]=useState()

    async function getBookingData(){
        let res=await getBookingList()
        setBooking(res.data);
    }

    useEffect(()=>{
        getBookingData()
    },[])

    return (
        <div className='container'>
            <div className="mb-2">
                <div className="fs-2 fw-medium text-center">
                    My Bookings
                </div>
            </div>
            <div className="mb-2">
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Doctor</th>
                        <th>Appoinmented Date</th>
                        <th>Booking No</th>
                        <th>Applied On</th>
                    </tr>
                </thead>
                <tbody>
                    {booking && booking.map((b,i)=>
                    <tr>
                    <td>{i+1}</td>
                    <td>{b.doctor}</td>
                    <td>{b.booking_date}</td>
                    <td>{b.booking_no}</td>
                    <td>{b.created_date.split("T")[0]}</td>
                </tr>)}
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Bookinglist