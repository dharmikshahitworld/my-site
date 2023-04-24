import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { routes } from '../../types'

export const Navigation: React.FC<Record<string, never>> = () => {
  const { index, home, about, services, portfolio, testimonial, contact } = routes

  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand as={Link} to={index}>
          Code Pro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto my-2 my-lg-0' navbarScroll>
            <Nav.Link as={Link} to={home}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={about}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={services}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to={portfolio}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to={testimonial}>
              Testimonial
            </Nav.Link>
            <Nav.Link as={Link} to={contact}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
