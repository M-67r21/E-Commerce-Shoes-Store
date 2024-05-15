import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'


const UserPofile = () => {

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
          <h1>User Profile</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              
                <Form.Group className='mb-3' controlId="validationCustom01">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue="John"
                    name='name'
                  />
                  <Form.Control.Feedback type='invalid'>Please enter a name!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="validationCustom02">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue="Doe"
                    name='lastName'
                  />
                  <Form.Control.Feedback type='invalid'>Please enter your LastName !</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    disabled
                    value='john@doe.com if you want to change email, remove account and create new one with new email address'
                                       
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your phone number'
                    defaultValue=""                   
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicCounty">
                  <Form.Label>County</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your county'
                    defaultValue=""                   
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicTown">
                  <Form.Label>Town</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your town'
                    defaultValue=""                   
                  />
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

                <Button variant='primary' type="submit" className='mb-3'>
                  Update
                </Button>
                <Alert show={true} variant='danger'>
                  User with that email exists
                </Alert>

                <Alert show={true} variant='info'>
                  User updated
                </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserPofile
