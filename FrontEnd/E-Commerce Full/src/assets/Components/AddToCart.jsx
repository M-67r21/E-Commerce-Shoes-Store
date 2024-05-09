import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const AddToCart = () => {

  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>The produt was added to cart!</Alert.Heading>
        <p>
          <Button variant='success'>Go back</Button> {" "}
          <Link to="/cart">
            <Button variant='danger'>Go to Cart</Button>
          </Link>
          
        </p>
      </Alert>
    );
  }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;

}

export default AddToCart