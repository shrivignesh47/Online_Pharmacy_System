import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container fluid style={{ Height: '100%' }}>
        <Navbar.Brand href="#">Online Phama</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ maxheight: '200%' }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Medicine</Nav.Link>
            <NavDropdown title="Phama Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Baby Products</NavDropdown.Item>
              <NavDropdown.Item href="#action3">HealthDrink Supplements</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Women Care</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Men Care</NavDropdown.Item>
              <NavDropdown.Item href="#action4"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link href="/details">Details</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;