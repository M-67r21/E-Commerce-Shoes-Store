import React from 'react'
import AdminChatRoom from '../../Components/admin/AdminChatRoom'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import AdminLinks from '../../Components/admin/AdminLinks'

const AdminChats = () => {
  return (
    <>
    <Row className='m-5'>
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <Row>
          <AdminChatRoom />
        </Row>
      </Col>
    </Row>
    </>
    
  )
}

export default AdminChats