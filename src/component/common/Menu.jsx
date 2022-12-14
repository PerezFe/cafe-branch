import { Navbar, Nav, Container, NavLink} from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href='#'>
          Benito Santos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-item nav-link'>
              Inicio
            </NavLink>
          <NavLink className="nav-item nav-link">
            Administrar
          </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
