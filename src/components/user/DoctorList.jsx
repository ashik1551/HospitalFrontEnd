import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getSpecializationApi, retrieveSpecializationApi } from '../../services/api';
import { Link } from 'react-router-dom';

function DoctorList() {

    const [specialization, setSpecialization] = useState()

    const [doctor, setDoctor] = useState()

    async function getSpecializaton() {
        let res = await getSpecializationApi()
        if (res.status > 199 && res.status < 300) {
            setSpecialization(res.data);

        }
    }

    async function handleClick(id) {
        let res = await retrieveSpecializationApi(id)
        setDoctor(res.data.doctor);

    }

    useEffect(() => {
        getSpecializaton()
    }, [])

    return (
        <div className='container'>
            <div className="row mb-2 border border-2 rounded p-4">
                <div className="col-4"></div>
                <div className="col-4">
                    <label htmlFor="">Doctors</label>
                    <select name="" id="" className='form-control' onChange={(e) => handleClick(e.target.value)}>
                        <option disabled selected>Specalization</option>
                        {specialization && specialization.map((s, i) =>
                            <option key={i} value={s.id} >{s.title}</option>)}
                    </select>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="">
                <div className="row">
                    {doctor && doctor.map((d, i) =>
                        
                            <Card style={{ width: '18rem' }} className='mx-1 pt-2'>
                                <Link to={`/user/doctor/${d.id}/`}><Card.Img variant="top" height={'300px'} src={d.image} /></Link>
                                <Card.Body>
                                    <Card.Title>Dr. {d.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        )}

                </div>
            </div>
        </div>
    )
}

export default DoctorList