import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import AdminLinks from '../../Components/admin/AdminLinks';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/esm/Button';

// Video 59
const deleteHandler = () =>{
  if (window.confirm("Are you sure?")) {
    alert("User deleted")
  }
}

const AdminUsers = () => {
 
  return (
    <>
      <Row className='m-5'>
          <Col md={2}>
            <AdminLinks />
          </Col>

          <Col md={10}>
              <h1>User List</h1>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-Mail</th>
                    <th>Is Admin</th>
                    <th>Edit/ Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx)=>(
                    <tr key={idx}>
                    <td>{idx +1}</td>
                    <td>Mark </td>
                    <td>Twain</td>
                    <td>marktwain@gmail.com</td>
                    <td>
                      <i className={item}></i>
                    </td>
                    <td>
                      <LinkContainer to="/adminedituser">
                        <Button className='btn-sm'>
                          <i className='bi bi-pencil-square'></i>
                        </Button>
                      </LinkContainer>
                      {"/"}
                      <Button variant='danger' className='btn-sm' onClick={deleteHandler}>
                        <i className='bi bi-x-circle '></i>
                      </Button>
                    </td>
                    <td></td>
                  </tr>
                  ))}
                  
                  
                  
                </tbody>
              </Table>
          </Col>
      </Row>
    </>
  )
}

export default AdminUsers