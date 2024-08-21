import React, { useState } from 'react'
import pizzas from '../../assets/pizza-data.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormSelect from 'react-bootstrap/FormSelect'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

const zoom = (event) => { event.target
    console.log(event.target);   
}

const Carte = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (

    <div className='cardsContainer'>
        {/* Début de la création des cartes pizza avec la fonction qui map sur la base de données */}
    {pizzas.map((pizza) => 

      <Card className='cards' style={{ width: '18rem' }} key={pizza.name}>
          <Card.Img variant="top" src={'src/assets'+ pizza.image} alt='Pizza Margherita' onClick={() =>setModalShow(true)}/>
      
            <Card.Body className='cardBody'>
                <Card.Title id='cardText' onClick={zoom}>{pizza.name}</Card.Title>
                <Card.Text className='description' onClick={zoom}>
                {pizza.description}
                </Card.Text>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <Stack direction="horizontal" gap={3}>
                    <Stack gap={3}>
                        <p>Taille:</p>
                        <Form.Select size="sm" className="d-flex flex-row">
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                        </Form.Select>
                    </Stack>
                    <Stack gap={3}>
                        <p>Quantité:</p>
                        <Form.Select size="sm" className="d-flex flex-row-reverse">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                        </Form.Select>
                    </Stack>
                </Stack>
                <Stack direction="horizontal" gap={3} id='price'>
                    <p>Prix:</p>
                    <Button variant="warning" className="p-2 ms-auto">Add</Button>
                </Stack>
            </Card.Body>
      </Card>
    )}
        {/* fin de la création des cartes pizza avec la fonction qui map sur la base de données */}
        </div>
  )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default Carte