import React from 'react';
import "./home.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormSelect from 'react-bootstrap/FormSelect'
import Stack from 'react-bootstrap/Stack';
import Carte from './Carte';
//import pizzas from '../../assets/pizza-data.js';



const Home = () => {

  return (
    <>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src="/src/assets/images/White_pizza-logo_250x250.jpg" alt="Logo Pizzeria" /></Navbar.Brand>
                    <Nav className="ms-auto">    
                        <Nav.Link href="#login" id="logPanier">Login</Nav.Link>
                        <Nav.Link href="#panier" id="logPanier">Panier</Nav.Link>
                    </Nav>    
              </Container>
            </Navbar>
        </div>
        
            <Carte />
          
    </>
  )
}

export default Home