import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { deleteSpecializationApi, getSpecializationApi } from '../../services/api'
import AddSpecialization from './AddSpecialization';
import EditSpecialization from './EditSpecialization';
import { useNavigate } from 'react-router-dom';

function Specializtions() {

    const [reload,setReload]=useState()

    const [specialization, setSpecialization] = useState()

    const navigate=useNavigate()

    async function getSpecialization() {
        let res = await getSpecializationApi()
        setSpecialization(res.data);
    }

    async function handleDelete(id) {
        let c=confirm("Are you sure..?")
        if(c){
            let res=await deleteSpecializationApi(id)
            getSpecialization()
        }
    }

    useEffect(() => {
        getSpecialization()
    }, [reload])

    return (
        <div className='container'>
            <div className="border shadow rounded p-3">
                <div className="fs-2 fw-medium text-center">Specializations</div>
                <div>
                    <AddSpecialization setReload={setReload}></AddSpecialization>
                </div>
                <div className="row">
                    {specialization && specialization.map((s, i) =>
                        <div className="col-3 my-2" key={i}>
                            <Card className='' style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><span className='fs-4'>{s.title}</span></ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="row">
                                            <div className="col-6"><button className='btn btn-sm btn-info' onClick={()=>{navigate(`/admin/doctor/${s.id}/`)}}>View Doctors</button></div>
                                            <div className="col-2"> <EditSpecialization specializationId={s.id} setReload={setReload}></EditSpecialization></div>
                                            <div className="col-2"><button className='btn btn-sm btn-danger' onClick={()=>{handleDelete(s.id)}}>Delete</button></div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Specializtions