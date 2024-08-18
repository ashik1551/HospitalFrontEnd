import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getBookingListAdmin, getDoctorApi } from '../../services/api';

function Booking() {

    const [today,setToday]=useState()

    const [doctor,setDoctor]=useState()

    const [doctorId,setDoctorId]=useState('')

    const [booking,setBooking]=useState('')

    const c_today = new Date().toJSON().slice(0, 10);

    function removePastDate(){
        let today = new Date().toJSON().slice(0, 10);
        setToday(today)
    }

    function handleDoctor(event){
        setDoctorId(event.target.value);
    }

    async function getData(){
        let link="?date="+document.getElementById("bdate").value

        if(link=="?date="){
            link="?date="+c_today
        }


        if (doctorId!=""){
            link+=`&doctor=${doctorId}`
            
        }
        
        let res=await getBookingListAdmin(link)

        if(res.status>199 && res.status<300){
            setBooking(res.data)
        }
        
    }

    async function getDoctorData(){
        let res=await getDoctorApi()
        setDoctor((res.data));
    }

    useEffect(()=>{
        removePastDate()
        getDoctorData()
        getData()
    },[])

    return (
        <div className='container'>
            <div className="mb-3 border rounded p-3">
            <div className="mb-3 text-center fs-2 fw-medium">Online Bookings</div>

                <div className="row">
                    <div className="col-2"></div>

                    <div className="col-3">
                        <label htmlFor="">Date</label>
                        <input type="date" className='form-control' id='bdate' defaultValue={today} />
                    </div>
                    <div className="col-3">
                        <label htmlFor="">Doctor</label>
                        <select  className="form-control" onChange={handleDoctor}>
                            <option value="" selected>All</option>
                            {doctor && doctor.map((d,i)=>
                            <option key={i} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-success mt-4" onClick={getData}>Show</button>
                    </div>
                    <div className="col-2"></div>

                </div>
            </div>
            <div className="mb-2 border rounded p-3">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Appoinmented Date</th>
                            <th>Booking No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking && booking.map((b,i)=>
                        <tr>
                        <td>{i+1}</td>
                        <td>{b.user}</td>
                        <td>{b.doctor}</td>
                        <td>{b.booking_date}</td>
                        <td>{b.booking_no}</td>
                    </tr>)}
                    {booking==''?<tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>no data available</td>
                            <td>-</td>
                        </tr>:null}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Booking