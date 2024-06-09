import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'


const Login = () => {

  const [validated, setValidated] = useState(false);

  


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container>

        <Row className='mt-5 justify-content-md-center'>
          <Col md={6}>
          <h1>Login</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              
                  <Form.Group className='mb-3' controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    name='email'
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicPassword">
                  <Form.Label> Password</Form.Label>
                  <Form.Control
                    name='password'
                    required
                    type="password"
                    placeholder="Password"
                  />
            
                </Form.Group>

                
                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                  <Form.Check
                    name='doNotLogout'
                    type="checkbox"
                    label="Do not logout"
                  />
            
                </Form.Group>

                

                <Row className='pb-3'>
                  <Col>
                  Don't you have an account? 
                  <Link to={'/register'}> Register </Link>
                  </Col>
                </Row>
                <Button variant='primary' type="submit" className='mb-3'>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Login
                </Button>
                <Alert show={true} variant='danger'>
                  Wrong credentials
                </Alert>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login