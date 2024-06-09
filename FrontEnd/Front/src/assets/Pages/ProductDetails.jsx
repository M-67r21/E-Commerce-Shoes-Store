import React, { useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import AddToCart from '../Components/AddToCart'
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Rating } from 'react-simple-star-rating'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Alert from 'react-bootstrap/Alert';
import ImageZoom from "js-image-zoom"



const ProductDetails = () => {
  var options = {
    // width:400,
    // zoomWidth:500,
    // fillContainer:true,
    // zoomPosition:"bottom",
    scale: 2,
    offset: {vertical: 0, horizontal: 0},
  }
  useEffect(()=>{
    new ImageZoom(document.getElementById("first"),options)
    new ImageZoom(document.getElementById("second"),options)
    new ImageZoom(document.getElementById("third"),options)
  })

  return (
    <>
      <Container>
            <AddToCart />
        <Row className='mt-5'>
          <Col style={{zIndex:1}} md={4}>
            <div id="first">
              <Image crossOrigin='anonymous' fluid src="/Images/AirMax90.jpg"/>
            </div> <br />
            <div id="second">
              <Image fluid src="/Images/AirMax902.jpg"/>
            </div> <br />
            <div id="third">
              <Image fluid src="/Images/AirMax903.jpg"/>
            </div> <br />
            
          </Col>
          <Col md={8}>
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h1>AirMax90</h1>
                    </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating readonly size={20} initialValue={4}/> (1)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price <span className='fw-bold'>KSH 3500</span>
                  </ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: In Stock</ListGroup.Item>
                <ListGroup.Item>
                    Price <span className='fw-bold'>KSH 3500</span>
                    </ListGroup.Item>
                <ListGroup.Item>
                  Quantity
                  <Form.Select size="lg" aria-label='Default select example'>
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                  
                </ListGroup.Item>
                <ListGroup.Item>

                  <Button variant='danger'>Add to Cart</Button>

                </ListGroup.Item>
              </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col className='mt-5'>
                <h5>Reviews</h5>
                <ListGroup variant="flush">
                  {Array.from({length:10}).map((item, idx)=>(
                     <ListGroup.Item key={idx}>
                        John Doe <br />
                        <Rating readonly size={20} initialValue={4}/> <br />
                        10-05-2024 <br />
                        The underlying HTML element to use when rendering the FormControl.
                      </ListGroup.Item>
                  )
                )}
                 
                </ListGroup>
              </Col>
            </Row>
            <hr />
            Send Review Form
            <Alert variant="danger">Login first to write a Review</Alert>
            <Form>
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write a Review</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
                  <Form.Select aria-label='Default Example'>
                    <option>Your Rating</option>
                    <option value="5">5 (very good)</option>
                    <option value="4">4 (good)</option>
                    <option value="3">3 (average)</option>
                    <option value="2">2 (bad)</option>
                    <option value="1">1 (awful)</option>
                  </Form.Select>

              <Button className='mb-3 mt-3' variant='primary'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductDetails