import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
      <Navbar className='Nav' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EVENZA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Tienda</Nav.Link>
            <Nav.Link href="#pricing">Mis Tickets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>        
    </>
  )
}
