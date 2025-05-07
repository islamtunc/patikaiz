// Bismillahirrahmanirrahim

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
            <Nav.Link href="/malper">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmavahi">Web Sites</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkinc">
                
             Mobile Apps
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh">Desktop Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmkedkar">
                
                Artificial Intelligence
              </NavDropdown.Item>





              <NavDropdown.Item href="/malper/mmwesayit">
                Health/Repairing
              </NavDropdown.Item>
            </NavDropdown>




            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmperwerdehi">Web</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                
Mobile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Machine Learning</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
                Cross Platform Apps
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Services " id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmkarubar">Windows Apps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>












          


            <NavDropdown title="References" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mm">NLP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                Object Detection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Image Processing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Advanced
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="For Developers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mmmmm">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Documantations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contribute</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Join to Yekazad
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">About Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;