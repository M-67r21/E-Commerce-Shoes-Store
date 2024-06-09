import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const Cards = ({category, idx}) => {
  const images = [
    "/Images/AirMax90.jpg",
    "/Images/Samba.jpg",
    "/Images/Puma5.jpg",
    "/Images/Amiri.jpg",
    "/Images/Naked Wolf.jpg",
    "/Images/Lv.jpg",
    "/Images/Vans.jpg",
    "/Images/Converse.jpg",
    "/Images/Clarks.jpg",
    "/Images/Bape.jpg",
    "/Images/Dior.jpg",
    "/Images/Clarks.jpg",    
    "/Images/Tommy.jpg",      
  ]

  return (
    <>
        <Card style={{ width: '25rem', marginLeft:"2rem" }}>
            <Card.Img  
              crossOrigin= "anonymous"  
              variant="top" 
              src={images[idx]}
              style={{height:'300px', objectFit:'cover'}} />
              
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <LinkContainer to="/productlist">
                  <Button variant="primary">Go to the Category </Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    </>
  )
}

export default Cards 