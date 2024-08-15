import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { createSpecializationApi } from '../../services/api';

function AddSpecialization({ setReload }) {

    const [form, setForm] = useState({ title: '' })

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setForm({ title: '' })
    }
    const handleShow = () => setShow(true);

    async function handleSubmit(event) {
        event.preventDefault()
        let res = await createSpecializationApi(form);
        if (res.status > 199 && res.status < 300) {
            handleClose()
            setReload(Math.random())
        }
    }

    return (
        <div>
            <Button variant="outline-primary" onClick={handleShow}>
                Add new
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Specialization</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="border rounded p-3">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Title</label>
                                <input type="text" required className="form-control" onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder='specialization name' />
                            </div>
                            <div className="mb-3">
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary mx-2">Save</Button>
                            </div>
                        </form>
                    </div>

                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AddSpecialization