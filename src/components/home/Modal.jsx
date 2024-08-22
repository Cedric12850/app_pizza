import React, { useState } from 'react'
import DataPizza from './DataPizza'
import Button from 'react-bootstrap/Button';


const Modal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
<>
    <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>pizzaName=</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                description=
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    
</>   
  )
}

export default Modal