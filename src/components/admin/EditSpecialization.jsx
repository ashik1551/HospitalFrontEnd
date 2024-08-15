import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { retrieveSpecializationApi, updateSpecializationApi } from '../../services/api';

function EditSpecialization({specializationId,setReload}) {

    const [form, setForm] = useState({ title: '' })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getdata() {
        let res=await retrieveSpecializationApi(specializationId)
        if(res.status>199 && res.status<300){
            setForm(res.data);
            
        }
    }

    async function handleSubmit(event){
        event.preventDefault()
        let res=await updateSpecializationApi(specializationId,form)
        if(res.status>199 && res.status<300){
            setReload(Math.random())
            handleClose()
        }
    }

    useEffect(()=>{
        getdata()
    },[specializationId])

    return (
        <div>
            <Button variant="warning" size='sm' onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Specialization</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="border rounded p-3">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Title</label>
                                <input type="text" required className="form-control" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder='specialization name' />
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

export default EditSpecialization