import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createDoctorApi } from '../../services/api';

function AddDoctor({ id, setRefresh }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setDoctor({ name: '', age: '', experience: '', image: null })
    }

    const [doctor, setDoctor] = useState({ name: '', age: '', experience: '', image: null })

    async function handleSubmit(event) {
        event.preventDefault()
        let res = await createDoctorApi(id, doctor)
        if (res.status > 199 && res.status < 300) {
            setRefresh(Math.random())
            handleClose()
        }
    }

    return (
        <div>
            <Button variant="outline-primary" onClick={handleShow}>
                Add Doctor
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="border rounded p-3">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" onChange={(e) => setDoctor({ ...doctor, name: e.target.value })} placeholder='Name' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Age</label>
                                <input type="number" className="form-control" onChange={(e) => setDoctor({ ...doctor, age: e.target.value })} placeholder='Age' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Exerience</label>
                                <input type="number" className="form-control" onChange={(e) => setDoctor({ ...doctor, experience: e.target.value })} placeholder='Experience' required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Image</label>
                                <input type="file" accept="image/*" onChange={(e) => setDoctor({ ...doctor, image: e.target.files[0] })} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary mx-1">Save</Button>
                            </div>
                        </form>
                    </div>

                </Modal.Body>

            </Modal>
        </div >
    )
}

export default AddDoctor