import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteDoctorApi, retrieveSpecializationApi } from '../../services/api';
import AddDoctor from './AddDoctor';
import EditDoctor from './EditDoctor';

function Doctors({ id }) {

  const [doctorData,setDoctorData]=useState()
  const [refresh,setRefresh]=useState()

  async function getData() {
    let res=await retrieveSpecializationApi(id)
    if(res.status>199 && res.status<300){
      setDoctorData(res.data);
    }
  }

  async function handleDelete(id) {
    let res=await deleteDoctorApi(id)
      getData()
  }

  useEffect(()=>{
    getData()
  },[refresh])

  return (
    <div className='container'>
      <div className="border shadow rounded p-3">
        <div className="fs-2 fw-medium mb-3 text-center">Doctors in {doctorData?doctorData.title:null}</div>
        <div className="row">
          <div className='mb-3'>
            <AddDoctor id={id} setRefresh={setRefresh}></AddDoctor>
          </div>

          {doctorData && doctorData.doctor.map((d,i)=>
          <div className="col-3 my-2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={d.image} style={{height:"280px",width:"content"}} />
            <Card.Body>
              <Card.Title>Dr. {d.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Age : {d.age}</ListGroup.Item>
              <ListGroup.Item>Experience : {d.experience} Years</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <div className="row">
                <div className="col-5"><Card.Link ><EditDoctor doctorId={d.id} specialId={id} setRefresh={setRefresh}></EditDoctor></Card.Link></div>
                <div className="col-4"><Card.Link ><button className='btn btn-danger btn-sm' onClick={()=>{handleDelete(d.id)}}>Delete</button></Card.Link></div>
              </div>
            </Card.Body>
          </Card>
        </div>)}
          

        </div>
      </div>
    </div>
  )
}

export default Doctors