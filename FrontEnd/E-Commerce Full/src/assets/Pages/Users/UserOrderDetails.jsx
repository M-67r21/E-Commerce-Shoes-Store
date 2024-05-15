import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import  Form  from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'
import CartItem from '../../Components/CartItem'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import Button from 'react-bootstrap/esm/Button'

const UserOrderDetails = () => {
  return (
    <> 
      <Container fluid>
        <Row className="mt-4">
          <h1>OrderDetails</h1>
          <Col md={8}>
            <br />
            <Row>

              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name</b>: John Doe <br />
                <b>County</b>:Kitui <br />
                <b>Phone Number</b>: 0722795798 <br />
                <b>Town</b>:Tulia 
              </Col>

              <Col md={6}>
                <h2>Payment Method</h2>
                <Form.Select disabled={false}>
                  <option value="pp">
                    PayPal
                  </option>

                  <option value="m">
                    M-Pesa
                  </option>

                  <option value="cod">
                    Cash on Delivery
                  </option>
                </Form.Select>
              </Col>
              <Row>
                <Col>
                  <Alert className="mt-3" variant="danger">
                      Not Delivered
                  </Alert>
                </Col>

                <Col>
                  <Alert className="mt-3" variant="success">
                      Paid on 2024-05-10
                  </Alert>
                </Col>

              </Row>

            </Row>
            <br />
            <h2>Order Items</h2>
            <ListGroup variant="flush">
                {Array.from({length: 3}).map((item, idx)=>(
                  <CartItem key={idx}/>
                ))}
            </ListGroup>
            
          </Col>

          <Col md={4}>
            
              <ListGroup>
                <ListGroupItem>
                  <h3>Order Summary</h3>  
                </ListGroupItem>
                <ListGroupItem>
                  Items Price <span className='fw-bold'>KSH 3500</span>  
                </ListGroupItem>
                <ListGroupItem>
                  Shipping 
                </ListGroupItem>
                <ListGroupItem className='text-danger'>
                  Total Price <span className='fw-bold'>KSH 3800</span>
                </ListGroupItem>
                <ListGroupItem>
                  <div className='d-grid gap-2'>
                    <Button size='lg' variant='danger' type='button'>
                      Pay for the Order
                    </Button>
                  </div>
                </ListGroupItem>

              </ListGroup>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserOrderDetails