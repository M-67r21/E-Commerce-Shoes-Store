import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RatingView, { Rating } from "react-simple-star-rating"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { LinkContainer } from 'react-router-bootstrap';


const ProductForList = ({images, idx}) => {
  return (
    <>
      <Card style={{ marginTop:"2rem", marginBottom:"3rem"}}>
        <Row>
          <Col lg={5}>
            <Card.Img variant="top" src={ images[idx]}
            style={{height:'300px', objectFit:'cover'}}/>
          </Col>
          <Col lg={7}>
            <Card.Body>
              <Card.Title>AirMax90</Card.Title>
                <Card.Text>
                  Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.
                </Card.Text>
                <Card.Text>
                  <Rating readonly size={20} initialValue={5} />(1)
                </Card.Text>
                <Card.Text className='h4'>
                  KSH 3500{""}

                  <LinkContainer to="/productdetails">
                    <Button variant="primary">See Poduct</Button>
                  </LinkContainer>
                  
                </Card.Text>
                
            </Card.Body>
          </Col>
        </Row>
      
      
    </Card>
    </>
  )
}

export default ProductForList