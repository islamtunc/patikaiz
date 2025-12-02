// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah. , Muhammedur Resulullah
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal } from "./mmodel"
import { NavDropdown } from 'react-bootstrap';
import SearchField from '@/hemanen/SearchField';
import Vsrtn from './yasal/mmvsrtn';
import Frtn  from './yasal/mmfrtn';
import  Bkrhnr from './yasal/mmbikarhnr';
import { Alert } from 'react-bootstrap';
function Mmmnavbar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">     <img src="/mlg.jpeg" alt="Patikaiz Logo" className="w-full" style={{height:"55px",width:"95px"}} />
</Navbar.Brand>
        <Navbar.Brand href="/malper"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper/mmavahi"> </Nav.Link>





            <Nav.Link href="/malper/mmhewcedari/hezkirin">Sevgi(li) Temalı </Nav.Link>
            <Nav.Link href="/malper/mmhewcedari/stenbl">İstanbul Temalı</Nav.Link>
            <Nav.Link href="/malper/mmhewcedari/reng">Manzara Temalı</Nav.Link>
            <Nav.Link href="/malper/mmhewcedari/bav">Baba Temalı</Nav.Link>
            <Nav.Link href="/malper/mmhewcedari/tn">Yalnızlık Temalı</Nav.Link>

            <Nav.Link href="/malper/mmhewcedari/dayik">Manzara Temalı</Nav.Link>


            <NavDropdown title="Hediye Kutusu" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="/malper?/tab=dunya-kuresi">Dünya Küresi</NavDropdown.Item>
              <NavDropdown.Item href="/malper?tab=kum-saati">Kum Saati</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper?tab=defter-kalem">
                Defter + Kalem vs
              </NavDropdown.Item>
            </NavDropdown>







            


            <Nav.Link href="/malper/derheq"><Alert>Hakkımızda</Alert></Nav.Link>



            <Nav.Link href="/malper?tab=iletisim"></Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;
// Bismillahirrahmanirahim
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
// Elhamdulillahirabbulalemin