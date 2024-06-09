import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const UserOrders = () => {
  return (
    <>
      <Row className='m-5'>
          <Col md={12}>
              <h1>My Orders</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Delivered</th>
                    <th>Order Details</th>
                  </tr>
                </thead>
                <tbody>
                  {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx)=>(
                    <tr key={idx}>
                    <td>{idx +1}</td>
                    <td>Mark Twain</td>
                    <td>2024-05-10</td>
                    <td>KSH 3500</td>
                    <td>
                      <i className={item}></i>
                    </td>
                    <td>
                      <Link to="/userorderdetails">Go to Order</Link>
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

export default UserOrders