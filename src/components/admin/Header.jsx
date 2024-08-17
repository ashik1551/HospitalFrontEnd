import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate=useNavigate()

    function handleLogout(){
        localStorage.clear()
        navigate('/')
    }

  return (
    <div>
        <Navbar fixed="top" expand="lg" className="bg-info py-3">
                <Container>
                    <Navbar.Brand href="" className='text-light'>
                        ABC-Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light' onClick={()=>{navigate('/admin/home/')}} >Home</Nav.Link>
                            <Nav.Link className='text-light' onClick={()=>{navigate('/admin/booking/')}} >Appoinments</Nav.Link>
                            <Nav.Link className='text-light' onClick={()=>{navigate('/admin/doctor/')}} >Doctors</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-light' onClick={handleLogout} >Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default Header