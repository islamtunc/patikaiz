// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber
// Hasbunallahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil aliyyil azim
import "./reng.css"
import MenuBar from "./hemanen/mmenu";
import Navbar from "./hemanen/mmnav";
import { Row, Col, Alert, Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./hemanen/mmbingeh";
import ContactForm from "./hemanen/mmfrm";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
   <Navbar />    <Alert variant="info" style={{ textAlign: "center", fontSize: "18px" }}>
        Selam Aleykum dear Visitor, Welcome to Patikaiz Website
      </Alert>
   
      <div className="container-fluid">
        <Row>
          <Col md={9}>
            {children}




             <ContactForm />
            <Footer />
          </Col>
          <Col md={3}>
            <MenuBar />
          </Col>
        </Row>
      </div>
      <div className="d-md-none">
        <MenuBar />
      </div>
    </>
  );
}






