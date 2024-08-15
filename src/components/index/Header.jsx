import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createUserApi, getUserApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [user, setUser] = useState({ username: '', password: '' })
    const [userRegister, setUserRegister] = useState({ username: '', password: '', first_name: '', last_name: '', email: '' })

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setUser({ username: '', password: '' })
    }
    const handleShow = () => setShow(true);


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => {
        setShow1(false);
        setUserRegister({ username: '', password: '', first_name: '', last_name: '', email: '' })
    }
    const handleShow1 = () => setShow1(true);


    async function handleSubmit(event) {
        event.preventDefault()
        let res = await getUserApi(user)
        if (res.status > 199 && res.status < 300) {
            localStorage.setItem('access', res.data.access)
            localStorage.setItem('refresh', res.data.refresh)
            localStorage.setItem('admin', 'false')
            handleClose()
            navigate('/user/home/')
        }
    }

    async function handleRegister() {
        let res=await createUserApi(userRegister)
        if(res.status>199 && res.status<300){
            alert("Account registered successfully...")
            handleClose1()
        }
    }

    useEffect(() => {
        if (localStorage.getItem('access') && localStorage.getItem('admin')==false) {
            navigate('/user/home/')
        }
    }, [])

    return (
        <div>
            <Navbar fixed="top" expand="lg" className="bg-info py-3">
                <Container>
                    <Navbar.Brand className='text-light'>
                        ABC-Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-light'><span onClick={handleShow}>
                                Login
                            </span>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>User Login</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="border border-1 shadow rounded p-3">
                                            <form action=''>
                                                <div className="mb-3">
                                                    <label htmlFor="">Username</label>
                                                    <input type="text" className='form-control' onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder='username' />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="">Password</label>
                                                    <input type="password" className='form-control' onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='password' />
                                                </div>
                                                <button className="btn btn-secondary" onClick={handleClose}>
                                                    Close
                                                </button>
                                                <button type="submit" onClick={handleSubmit} className='btn btn-primary ms-1'>Login</button>
                                            </form>
                                        </div>
                                    </Modal.Body>

                                </Modal></Nav.Link>
                            <Nav.Link className='text-light'>

                                <span onClick={handleShow1}>
                                    Register
                                </span>

                                <Modal
                                    show={show1}
                                    onHide={handleClose1}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Register Form</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <div className="border rounded p-3">
                                            <form action="">
                                                <div className="mb-3">
                                                    <label htmlFor="">username</label>
                                                    <input type="text" className='form-control' required onChange={(e)=>setUserRegister({...userRegister,username:e.target.value})} />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="">Email</label>
                                                    <input type="email" className='form-control' required onChange={(e)=>setUserRegister({...userRegister,email:e.target.value})} />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="">First name</label>
                                                    <input type="text" className='form-control' required onChange={(e)=>setUserRegister({...userRegister,first_name:e.target.value})} />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="">Last Name</label>
                                                    <input type="text" className='form-control' required  onChange={(e)=>setUserRegister({...userRegister,last_name:e.target.value})} />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="">Password</label>
                                                    <input type="password" className='form-control' required onChange={(e)=>setUserRegister({...userRegister,password:e.target.value})} />
                                                </div>

                                                    <Button variant="secondary" onClick={handleClose1}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary ms-1" type="submit" onClick={handleRegister}>Submit</Button>
                                            </form>
                                        </div>

                                    </Modal.Body>

                                </Modal>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header