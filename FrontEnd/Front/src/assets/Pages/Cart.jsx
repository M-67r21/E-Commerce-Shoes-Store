import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/esm/ListGroupItem';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';
import CartItem from '../Components/CartItem';


const Cart = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-4">
          <Col md={8}>
            <h1>Shipping Cart</h1>
            <ListGroup variant="flush">
                {Array.from({length: 3}).map((item, idx)=>(
                <CartItem  key={idx} />
                ))}
              </ListGroup>
              <br /> 
                <Alert variant="info">Your cart is empty</Alert>
              </Col>

              <Col md={4}>
                <ListGroup >
                  <ListGroupItem>
                    <h3>SubTotal (2 Items)</h3>
                  </ListGroupItem>

                  <ListGroupItem>
                    Price <span className='fw-bold'>KSH 3500</span>
                  </ListGroupItem>

                  <ListGroupItem>
                    <LinkContainer to="/usercartdetails">
                      <Button type="button">Proceed to Checkout</Button>
                    </LinkContainer>
                  </ListGroupItem>

              </ListGroup>
            
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Cart