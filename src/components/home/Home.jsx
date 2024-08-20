import React from 'react';
import "./home.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src="/src/assets/images/White_pizza-logo_250x250.jpg" alt="Logo Pizzeria" /></Navbar.Brand>
                    <Nav className="ms-auto">    
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#panier">Panier</Nav.Link>
                    </Nav>    
              </Container>
            </Navbar>
        </div>
        <div className='cardsContainer'>
              <Card className='cards' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="src/assets/images/margherita.jpg" alt='Pizza Margherita' />
                  <Card.Body>
                      <Card.Title>Margherita</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>

              <Card className='cards' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="src/assets/images/farmhouse.jpg" alt='Pizza Farmhouse' />
                  <Card.Body>
                      <Card.Title>Farmhouse</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>

              <Card className='cards' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="src/assets/images/veggie_paradise.jpg" alt='Pizza Veggie paradise' />
                  <Card.Body>
                      <Card.Title>Veggie paradise</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>

              <Card className='cards' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="src/assets/images/chicken_golden_delight.jpg" alt='Pizza Chicken Golden Delight' />
                  <Card.Body>
                      <Card.Title>Chicken Golden Delight</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>

              <Card className='cards' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="src/assets/images/cheesepepperoni.jpg" alt='Pizza Chicken Pepperoni' />
                  <Card.Body>
                      <Card.Title>Chicken Pepperoni</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>

              <Card className='cards' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="src/assets/images/IndianTandooriChickenTikka.jpg" alt='Pizza Indi Chicken Tikka' />
                  <Card.Body>
                      <Card.Title>Indi Chicken Tikka</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
          </div>
    </>
  )
}

export default Home