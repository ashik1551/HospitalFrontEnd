import React, { useEffect, useState } from 'react'
import { createBookingApi, retrieveDoctorData } from '../../services/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function DoctorDetail({ doctorId }) {

    const [doctor, setDoctor] = useState()

    const [today, setToday] = useState()

    const [bookingDate, setBookingDate] = useState({ booking_date: '' })

    const [show, setShow] = useState(false);

    const navigate=useNavigate()

    const handleClose = () => {
        setShow(false);
        setBookingDate({ booking_date: '' })
    }
    const handleShow = () => {
        setShow(true);
        let today = new Date().toJSON().slice(0, 10);
        setToday(today)
    }

    async function getDoctorData(id) {
        let res = await retrieveDoctorData(id)
        if (res.status > 199 && res.status < 300) {
            setDoctor(res.data)
        }
    }

    async function handleSubmit() {
        if (bookingDate["booking_date"]) {
            let res = await createBookingApi(doctorId, bookingDate)
            if (res.status > 199 && res.status < 300) {
                alert(`Your Appoinment Booked Successfully...\nBooking Date : ${res.data["booking_date"]}\nBooking No : ${res.data["booking_no"]}`)
                handleClose()
                navigate("/user/booking/")
            }
        }

    }

    useEffect(() => {
        getDoctorData(doctorId)
    }, [])

    return (
        <div className='container'>
            {doctor ?
                <div className="row border border-3 shadow rounded p-5">
                    <div className="col-3">
                        <img src={doctor.image} className='rounded' style={{ "height": "350px", width: "320px" }} />
                        <div className='fs-3 fw-semibold text-center'>Dr. {doctor.name}</div>
                    </div>
                    <div className='col-2'></div>
                    <div className="col-7">
                        <div className='fs-4 ms-3'>
                            <div className="my-4">Age : {doctor.age}</div>
                            <div className="my-4">Experience : {doctor.experience}</div>
                            <div className="my-4">Specialization : {doctor.specialization}</div>
                            <div className="my-4">
                                <Button variant="outline-primary" size='lg' onClick={handleShow}>
                                    Book Appointment
                                </Button>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Choose Booking Date</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="border border-1 rouned p-3">
                                            <div className="mb-3">
                                                <label htmlFor="">Doctor</label>
                                                <input id='myDate' type="text" className='form-control' value={"Dr. " + doctor.name} readOnly />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="">Specilization</label>
                                                <input id='myDate' type="text" className='form-control' value={doctor.specialization} readOnly />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="">Date</label>
                                                <input id='myDate' type="date" name="date" className='form-control' onChange={(e) => setBookingDate({ ...bookingDate, booking_date: e.target.value })} min={today} />
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleSubmit}>Done</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>

                : null}
        </div>
    )
}

export default DoctorDetail