// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah , Muhammedur Resulullah
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCart } from '../hooks/useCart';
import { Modal } from "./mmodel"
import { NavDropdown } from 'react-bootstrap';
import SearchField from '@/components/SearchField';
import Vsrtn from './yasal/mmvsrtn';
import Frtn  from './yasal/mmfrtn';
import  Bkrhnr from './yasal/mmbikarhnr';
function Mmmnavbar() {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Patika</Navbar.Brand>
        <Navbar.Brand href="/malper"><SearchField/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper/mmavahi">Duvar Takvimleri</Nav.Link>

            <NavDropdown title="ÖZEL GÜNLER" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmhewcedari?tab=for-you">Anneler Günü</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari?tab=dayik">Babalar Günü</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari?tab=bav">Öğretmenler Günü</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper?tab=rojbun">
                Diğer
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Hediye Kutusu" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="/malper?/tab=dunya-kuresi">Dunya Kuresi</NavDropdown.Item>
              <NavDropdown.Item href="/malper?tab=kum-saati">Kum Saati</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper?tab=defter-kalem">
                Defter + Kalem vs
              </NavDropdown.Item>
            </NavDropdown>







            


            <Nav.Link href="/malper?tab=hakkimizda">Hakkimizda</Nav.Link>



            <Nav.Link href="/malper?tab=iletisim">Çerez Politikasi</Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;