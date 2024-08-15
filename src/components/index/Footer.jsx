import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { checkAdmin, getUserApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState({ username: '', password: '' })

  const navigate=useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    let res = await getUserApi(user)
    if (res.status > 199 && res.status < 300) {
      localStorage.setItem('access', res.data.access)
      localStorage.setItem('refresh', res.data.refresh)
      let adminres = await checkAdmin()
      if (adminres.status > 199 && adminres.status < 300) {
        if (adminres.data.is_superuser) {
          navigate('/admin/home/')
          alert("Logged in Successfully...")
        }
        else {
          alert("Authentication Denied...!\nOnly Admin can Login")
          localStorage.clear()
          handleClose()
        }
      }
    }
  }

  return (
    <div>
      <Card className="text-center bg-secondary">
        <Card.Header className='text-light'>Featured</Card.Header>
        <Card.Body>
          <Card.Title className='text-light'>Special title treatment</Card.Title>
          <Card.Text className='text-light'>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-light"><button className='btn btn-info btn-sm' onClick={handleShow}>Staff Login</button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Admin login</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="border border-1 shadow rounded p-3">
                <form action='' onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-4">
                      <div className="mb-3">
                        <img src={"/img/admin.jpeg"} alt="" style={{ height: "200px" }} />
                      </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">
                      <div className="mb-3 ">
                        <label htmlFor="">Username</label>
                        <input type="text" className='form-control' required onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder='username' />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" className='form-control' required onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='password' />
                      </div>
                      <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                      </button>
                      <button type="submit" className='btn btn-primary ms-1'>Login</button>
                    </div>
                  </div>
                </form>
              </div>

            </Modal.Body>
          </Modal></Card.Footer>
      </Card>
    </div>
  )
}

export default Footer