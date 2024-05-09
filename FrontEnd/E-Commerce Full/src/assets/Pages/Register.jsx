import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'


const Register = () => {

  const [validated, setValidated] = useState(false);

  const onChange = ()=>{
    const password = document.querySelector("input[name=password")
    const confirm = document.querySelector("input[name=confirmPassword")

    if (confirm.value === password.value) {
      confirm.setCustomValidity('')
    } else{
      confirm.setCustomValidity('Passwords do not match')
    }
  }


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
          <h1>Register</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              
                <Form.Group className='mb-3' controlId="validationCustom01">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your Name"
                    name='name'
                  />
                  <Form.Control.Feedback type='invalid'>Please enter a name!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="validationCustom02">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your LastName"
                    name='lastName'
                  />
                  <Form.Control.Feedback type='invalid'>Please enter your LastName !</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    name='email'
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type='invalid'>Please enter valid Email !</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicPassword">
                  <Form.Label> Password</Form.Label>
                  <Form.Control
                    name='password'
                    required
                    type="password"
                    placeholder="Password"
                    minLength={6}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type='invalid'>Please enter valid password!</Form.Control.Feedback>
                  <Form.Text className='text-muted'>
                    Password should have at least 6 characters 
                  </Form.Text>

                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicPassword">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    name='confirmPassword'
                    required
                    type="password"
                    placeholder="Repeat Password"
                    minLength={6}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Both passwords should match!
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className='pb-3'>
                  <Col>
                  Do you have an account already? 
                  <Link to={'/login'}> Login </Link>
                  </Col>
                </Row>
                <Button type="submit" className='mb-3'>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Submit
                </Button>
                <Alert show={true} variant='danger'>
                  User with that email exists
                </Alert>

                <Alert show={true} variant='info'>
                  User created
                </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register