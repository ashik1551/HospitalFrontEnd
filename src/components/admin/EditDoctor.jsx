import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { retrieveDoctorData } from '../../services/api';

function EditDoctor({ doctorId }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [doctor, setDoctor] = useState({ name: '', age: '', experience: '', image: null })

    async function getDoctor() {
        let res = await retrieveDoctorData(doctorId)
        if (res.status > 199 && res.status < 300) {
            setDoctor(res.data)
        }
    }

    useEffect(() => {
        getDoctor()
    }, [])

    return (
        <div>
            <Button variant="warning" size='sm' onClick={handleShow}>
                Edit Doctor
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {doctor ? <div className="border rounded p-3">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" value={doctor.name} onChange={(e)=>setDoctor({...doctor,name:e.target.value})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Age</label>
                                <input type="text" value={doctor.age} onChange={(e)=>setDoctor({...doctor,age:e.target.value})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Experience</label>
                                <input type="text" value={doctor.experience} onChange={(e)=>setDoctor({...doctor,experience:e.target.value})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Image</label>
                                <input type="file" accept='image/*' onChange={(e)=>setDoctor({...doctor,image:e.target.files[0]})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary mx-1">Save</Button>
                            </div>
                        </form>
                    </div> : null}

                </Modal.Body>

            </Modal>
        </div>
    )
}

export default EditDoctor