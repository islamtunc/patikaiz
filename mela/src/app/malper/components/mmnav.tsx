// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
// La ilahe illallah, Allahu Ekber, Allahu Ekber, Allahu Ekber
// SubhAnAllah, SubhanAllah, SubhanAllah, ve'l-hamdulillah
// HasbunAllahu ve ni'mel vekil
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
            <Nav.Link href="/malper/ilanlar">İlanlar</Nav.Link>
            <Nav.Link href="#link">Politikalarımız</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" >Giriş Yap/Kaydol</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;