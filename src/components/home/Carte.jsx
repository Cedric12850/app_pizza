import React, { useState } from 'react'
import pizzas from '../../assets/pizza-data.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Modal from './modal.jsx';




const Carte = ({mapizza}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className='cardsContainer'>
      {/* Début de la création des cartes pizza avec la fonction qui map sur la base de données */}
      {/* {pizzas.map((pizza,i) =>  */}

      <Card className='cards' style={{ width: '18rem' }} >
        <Card.Img variant="top" src={'src/assets'} alt='Pizza Margherita' onClick={handleShow} />

        <Card.Body className='cardBody'>
          <Card.Title id='cardText'></Card.Title>
          <Card.Text className='description' >
              
          </Card.Text>

          <Stack direction="horizontal" gap={3}>
            <Stack gap={3}>
              <Form.Select size="sm" className="d-flex flex-row"> 
              {/* {pizza.varients.map((size,i) =>
              <option key={i}>{size}</option>
              )} */}
              </Form.Select>
            </Stack>
            <Stack gap={3}>
                <Form.Select size="sm" className="d-flex flex-row-reverse">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
                  
            </Stack>
          </Stack>
          <Stack direction="horizontal" gap={3} id='price'> 
            {/* <p>Prix: {pizza.prices.map((prix)=> console.log(prix.medium))}
            </p> */}
            <Button variant="warning" className="p-2 ms-auto">Add</Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* )} */}
      {/* fin de la création des cartes pizza avec la fonction qui map sur la base de données */}
    </div>

   
  
  );
}


export default Carte