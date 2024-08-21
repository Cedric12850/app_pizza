import React from 'react'
import "./contact.css"
import Header from '../header/Header';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { TbPhoneCall } from "react-icons/tb";
import { FaMobileScreen } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

const Contact = () => {
  return (
    <>
    <Header />
    <Container>
    <Stack direction="horizontal" gap={3}>
      <Col>
      <h2>Pizza Delicious</h2>
      <h3>Notre adresse :</h3>
      <p>103, rue des olives noires</p>
      <p>75021 Paris</p>
      <p>POUR VOTRE INFORMATION! Nous offrons un service traiteur complet pour tout évènement, grand ou petit. Nous comprenons vos besoins et nous préparerons nos plats pour satisfaire les critères les plus importants, à la fois esthétiques et gustatifs.</p>

      <Table striped bordered hover id='tableau'>
      <thead>
        <tr>
          <th id='tableTitle' colSpan={3}>-- Nos Coordonnées --</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><TbPhoneCall /></td>
          <td>Téléphone</td>
          <td colSpan={2}>01 23 45 67 89</td>         
        </tr>
        <tr>
          <td><FaMobileScreen /></td>
          <td>Portable</td>
          <td>0698765432</td>
        </tr>
        <tr>
          <td><GoMail /></td>
          <td>Email</td>
          <td>contact@pizza-delicious.com</td>          
        </tr>
      </tbody>
      </Table>
      </Col>

      <div>
      <Image src="app_pizzeria/images/farmhouse.jpg" alt="Pizza Farmhouse" fluid/>
      </div>
    </Stack>
    </Container>
    </>
  )
}

export default Contact