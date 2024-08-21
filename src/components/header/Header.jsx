import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdLocalOffer } from "react-icons/md";

const Header = () => {
  return (
      
        <Navbar expand="lg" className="bg-body-tertiary header">
      <Container fluid className='navTop'>
      <MdLocalOffer id='offer'/> Livraison gratuite à domicile pour toute commande supérieure à 50€
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="cgv">CGV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
  )
}

export default Header