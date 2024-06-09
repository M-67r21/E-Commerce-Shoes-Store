import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const AdminLinks = () => {
  return (
    <>
        <Navbar bg="light" variant="light">
            <Nav className="flex-column">
                <LinkContainer to='/adminorders'>
                    <Nav.Link>
                        Orders
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/adminproducts'>
                    <Nav.Link>
                        Products
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/adminusers'>
                    <Nav.Link>
                        Users
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/adminchats'>
                    <Nav.Link>
                        Chats
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/adminanalytics'>
                    <Nav.Link>
                        Analytics
                    </Nav.Link>
                </LinkContainer>
                <Nav.Link>
                    Logout
                </Nav.Link>
            </Nav>
        </Navbar>

        
    </>
  )
}

export default AdminLinks