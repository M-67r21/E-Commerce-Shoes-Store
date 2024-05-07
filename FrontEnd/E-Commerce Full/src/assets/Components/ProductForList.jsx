import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RatingView from "react-simple-star-rating"

const ProductForList = () => {
  return (
    <>
      <Card style={{ width: '25rem', marginTop:"2rem", marginBottom:"3rem"}}>
      <Card.Img variant="top" src="/Images/Nike.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
           card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductForList