import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import AdminLinks from '../../Components/admin/AdminLinks';
import Button from 'react-bootstrap/esm/Button';
import { LinkContainer } from 'react-router-bootstrap';
const deleteHandler =() =>{
  if (window.confirm("Are you sure?")) {
    alert("Product deleted!")
  }
}

const AdminProducts = () => {
  return (
    <>
      <Row className='m-5'>
          <Col md={2}>
            <AdminLinks />
          </Col>

          <Col md={10}>
              <h1>
                Product List {" "}
                <LinkContainer to="/admincreateproducts">
                  <Button variant='primary' size='lg'>
                    Create New
                  </Button>
                </LinkContainer>
                
              </h1>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {[{name: "AirMax90", price: "KSH3500", category:"Nike"}, 
                    {name: "Campus", price: "KSH3500", category:"Adidas"},
                    {name: "Nocta", price: "KSH4500", category:"Nike"}
                  ].map((item, idx)=>(
                    <tr key={idx}>
                      <td>{idx +1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>
                        <LinkContainer to="/admineditproduct">
                          <Button className='btn-sm'>
                            <i className="bi bi-pencil-square"></i>
                          </Button>
                        </LinkContainer>
                        {"/"}
                          <Button variant='danger' className='btn-sm' onClick={deleteHandler}>
                            <i className="bi bi-x-circle"></i>
                          </Button>
                      </td>
                      <td></td>
                      <td>
                        
                      </td>
                    </tr>
                  ))}
                  
                  
                  
                </tbody>
              </Table>
          </Col>
      </Row>
    </>
  )
}

export default AdminProducts