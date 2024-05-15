import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import CloseButton from 'react-bootstrap/CloseButton';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

const AdminEditProduct = () => {

    const onHover = {
      cursor:"pointer",
      position: "absolute",
      left:"5px",
      top:"-10px",
      transform: "scale(2.7)",
    }
  
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) =>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stoPropagation();
    }
    setValidated(true);
  }
  return (
    <>
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col md={1}>
          <Link to="/adminproducts" className='btn btn-info my-3'>
            Go Back
          </Link> 
        </Col>
        <Col md={6}>
          <h1>Edit Product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}> 
            <Form.Group className="mb-3" controlId='formBasicName'>
             <Form.Label>Name</Form.Label>
              <Form.Control 
              name='name' 
              required type='text' 
              defaultValue="Nike"
              />
            </Form.Group>
          

            <Form.Group 
              className="mb-3" 
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Description</Form.Label>
                <Form.Control 
                  name='description' 
                  required 
                  as='textarea' 
                  rows={3} 
                  defaultValue="Product Description"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId='formBasicCount'>
              <Form.Label>Count in Stock</Form.Label>
                <Form.Control 
                name='count' 
                required 
                defaultValue="3"
                type='number' />
            </Form.Group>

            <Form.Group className="mb-3" controlId='formBasicPrice'>
              <Form.Label>Price</Form.Label>
                <Form.Control name='price' required type='text' defaultValue="3800"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId='formBasicCategory'>
              <Form.Label>
                Category
              </Form.Label>
                <Form.Select
                  name='category'
                  required 
                  aria-label='Default selct example'
                  >
                    <option value="">Choose Category</option>
                    <option value="1">Nike</option>
                    <option value="2">Adidas</option>
                    <option value="3">LV</option>
                    <option value="4">Amiri</option>
                    <option value="5">Vans</option>
                    <option value="6">Converse</option>
                </Form.Select>
            </Form.Group>

              <Row className='mt-5'>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId='formBasicAttributes'>
                    <Form.Label>
                      Choose attributes and set value
                    </Form.Label>
                    <Form.Select
                      name='atrrKey'
                      aria-label='Default selct example'
                      >
                        <option value="">Choose Category</option>
                        <option value="red">Color</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId='formBasicAttributes'>
                    <Form.Label>
                      Attribute value
                    </Form.Label>
                    <Form.Select
                      name='atrrVal'
                      aria-label='Default selct example'
                      >
                        <option value="">Choose attribute value</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Table hover>
                  <thead>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>attr key</td>
                      <td>attr value</td>
                      <td>
                        <CloseButton />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId='formBasicNewAttribute'>
                    <Form.Label>
                      Create New Attribute
                    </Form.Label>
                    <Form.Control 
                      disabled={false}
                      name='newAttrValue' 
                      type='text' 
                      placeholder='First choose or Create category'
                      />
                  </Form.Group>
                </Col>

                <Col md={6}>  
                  <Form.Group className="mb-3" controlId='formBasicNewAttribute'>
                    <Form.Label>
                      Attribute Value
                    </Form.Label>
                    <Form.Control 
                      disabled={false}
                      name='newAttrValue' 
                      type='text' 
                      placeholder='First choose or Create category'
                      />
                  </Form.Group>
                
                </Col>

              </Row>

              <Alert variant='primary'>
                After typing attrribute key and value press enter on one of the fields
              </Alert>

            <Form.Group className="mb-3 mt-3" controlId='formFileMultiple'>
              <Form.Label>Images</Form.Label>
                  <Row>
                    <Col style={{position:"relative"}} xs={3}>
                      <Image crossOrigin='anonymous' src='Images/AirMax901.jpg' fluid/>
                      <i style={onHover} className='bi bi-x text-danger' ></i>
                    </Col>

                    <Col style={{position:"relative"}} xs={3}>
                      <Image  src='Images/Lv.jpg' fluid/>
                      <i style={onHover} className='bi bi-x text-danger' ></i>
                    </Col>

                    <Col style={{position:"relative"}} xs={3}>
                      <Image  src='Images/Dior.jpg' fluid/>
                      <i style={onHover} className='bi bi-x text-danger' ></i>
                    </Col>

                  </Row>
                <Form.Control required type='file' multiple />
            </Form.Group>
            <Button variant='primary' type='submit'>Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default AdminEditProduct