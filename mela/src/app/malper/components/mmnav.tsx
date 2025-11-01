// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Patika</Navbar.Brand>
        <Navbar.Brand href="/malper">Anasayfa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper/mmavahi">Duvar Takvimleri</Nav.Link>


            <NavDropdown title="ÖZEL GÜNLER" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mm">Anneler Günü</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                Babalar Günü
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Öğretmenler Günü</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Diğer
              </NavDropdown.Item>
            </NavDropdown>
          









            <NavDropdown title="Hediye Kutusu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/">Web</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                
Mobile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Machine Learning</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
                Cross Platform Apps
              </NavDropdown.Item>
            </NavDropdown>



          












          


            <Nav.Link href="/malper/derheq">Hakkimizda</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;