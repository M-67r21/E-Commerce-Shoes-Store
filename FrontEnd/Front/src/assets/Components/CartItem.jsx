import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import FormSelect from 'react-bootstrap/esm/FormSelect'
import Image from 'react-bootstrap/esm/Image'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import Row from 'react-bootstrap/esm/Row'

const CartItem = () => {
  return (
    <>
    
        <ListGroupItem>
            <Row>
                <Col md={2}>
                    <Image crossOrigin='anaonymous' src='/Images/AirMax901.jpg' fluid 
                    />
                </Col>
                <Col md={2}>
                    AirMax90  <br />
                    Black and red
                </Col>
                <Col md={2}>
                    <b>KSH 3500</b>
                </Col>
                <Col md={3}>
                    <FormSelect>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </FormSelect>
                </Col>
            
                <Col md={3}>
                    <Button 
                        type='button' 
                        variant='secondary' 
                        onClick={()=>window.confirm("Are you sure?")}>
                        <i className="bi bi-trash"></i>
                    </Button>
                </Col>
            </Row>
            <hr />
        </ListGroupItem>
    </>
  )
}

export default CartItem