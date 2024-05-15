import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'


const AdminEditUser = () => {
 
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
        <Link to="/adminusers" className='btn btn-info my-3'>
          Go Back
        </Link> 
      </Col>
      <Col md={6}>
        <h1>Edit User</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId='formBasicFirstName'>
           <Form.Label>First Name</Form.Label>
            <Form.Control 
            name='name' 
            required type='text' 
            defaultValue="John"
            />
          </Form.Group>
        

          <Form.Group 
            className="mb-3" 
            controlId='formBasicLastName'
          >
            <Form.Label>Last Name</Form.Label>
              <Form.Control 
                name='lastName' 
                required 
                type='text' 
                defaultValue="Doe"
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
              <Form.Control 
              name='email' 
              required 
              defaultValue="John@email.com"
              type='email' />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId='formBasicCheckbox'>
            <Form.Check 
              name='isAdmin'
              type='checkbox'
              label='Is Admin'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>Update</Button>
        </Form>
      </Col>
    </Row>
  </Container>

  </>
)
}


export default AdminEditUser