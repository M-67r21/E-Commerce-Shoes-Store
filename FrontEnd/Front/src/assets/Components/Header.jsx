
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand href="/">Uptow Kicks</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
                <DropdownButton id="dropdown-basic-button" title="All">
                    <Dropdown.Item >Nike</Dropdown.Item>
                    <Dropdown.Item >Adidas</Dropdown.Item>
                    <Dropdown.Item >Puma</Dropdown.Item>
                    <Dropdown.Item >Luis Vuitton</Dropdown.Item>
                    <Dropdown.Item >Amiri</Dropdown.Item>
                    <Dropdown.Item >Converse</Dropdown.Item>
                    <Dropdown.Item >Vans</Dropdown.Item>
                    <Dropdown.Item >Naked Wolfe</Dropdown.Item>
                </DropdownButton>

                <Form.Control type="text" placeholder="Search in shop ..." />

                <Button variant="warning"><i className="bi bi-search"></i></Button>

            </InputGroup>

            </Nav>


            <Nav>
                <LinkContainer to="/adminorders">
                    <Nav.Link >
                        Admin
                        <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
                    </Nav.Link>
                </LinkContainer>

                

                <NavDropdown title="John Doe" id="collapsible-nav-dropdown">

                    <NavDropdown.Item eventKey="/userorders" as={Link} to="/userorders">My Orders</NavDropdown.Item>
                    <NavDropdown.Item eventKey="/userprofile" as={Link} to="/userprofile">User Profile</NavDropdown.Item>
                    <NavDropdown.Item>LogOut</NavDropdown.Item>

                </NavDropdown>

                <LinkContainer to="/login">
                    <Nav.Link >
                        Login
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link >
                        Register
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Nav.Link >
                    <Badge pill bg="danger">
                        2
                    </Badge>
                    <i className="bi bi-cart-dash"></i>
                    <span className='ms-1'>Cart</span>
                    </Nav.Link>
                </LinkContainer>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;