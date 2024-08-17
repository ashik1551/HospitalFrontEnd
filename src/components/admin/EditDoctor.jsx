import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getSpecializationApi, retrieveDoctorData, updateDoctorApi } from '../../services/api';

function EditDoctor({ doctorId,specialId,setRefresh }) {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        getDoctor()
    }
    const handleShow = () => setShow(true);

    const [doctor, setDoctor] = useState()

    const [specializationData,setSpecializationData]=useState()
    
    const [specializationId,setSpecializationId]=useState()

    async function getDoctor() {
        let res = await retrieveDoctorData(doctorId)
        if (res.status > 199 && res.status < 300) {
            setDoctor(res.data)
        }
    }

    async function getSpecialization() {
        let res=await getSpecializationApi()
        if(res.status>199 && res.status<300){
            setSpecializationData(res.data);
        }
    }

    async function handleSubmit(event){
        event.preventDefault()
        let fileInput = document.getElementById('image');
        let spId
        if(isNaN(doctor.specialization)){
            spId=specializationId
        }
        else{
            spId=doctor.specialization
        }

        if (fileInput.files.length === 0) {
            delete doctor.image;
        }
        
        let res=await updateDoctorApi(spId,doctor,doctorId)
        if(res.status>199 && res.status<300){
            handleClose()
            setRefresh(Math.random())
        }
        
        
    }

    useEffect(() => {
        getDoctor()
        getSpecialization()
        setSpecializationId(specialId)
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
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" value={doctor.name} onChange={(e)=>setDoctor({...doctor,name:e.target.value})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Age</label>
                                <input type="number" value={doctor.age} onChange={(e)=>setDoctor({...doctor,age:e.target.value})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Experience</label>
                                <input type="number" value={doctor.experience} onChange={(e)=>setDoctor({...doctor,experience:e.target.value})} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Specialization</label>
                                <select value={specializationId} id={specializationId} onChange={(e)=>{setDoctor({...doctor,specialization:e.target.value})
                            setSpecializationId(e.target.value)}} className="form-control">
                                    {specializationData && specializationData.map((s,i)=>
                                    <option key={i} value={s.id}>{s.title}</option>
                                    )}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Image</label>
                                <input type="file" accept='image/*' id='image' onChange={(e)=>setDoctor({...doctor,image:e.target.files[0]})} className="form-control" />
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