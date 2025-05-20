// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Müşterisi Burada</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Anasayfa</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmavahi">Web Sites</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkinc">Mobile Apps</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh">Desktop Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmkedkar">Artificial Intelligence</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="btn btn-primary text-white ms-2">Giriş Yap</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;