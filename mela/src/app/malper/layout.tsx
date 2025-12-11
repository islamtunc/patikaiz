// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
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

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {/* Hoşgeldiniz alert */}
      <Alert 
        variant="success"
        style={{
          backgroundColor: '#fafaf2ff',
          color: '#2E2E2E',
          fontSize: '18px',
          padding: '10px 20px',
          textAlign: 'center',
          borderRadius: '8px',
          margin: '20px 0',
          fontWeight: 'bold',
          fontFamily:"cursive"
        }}
      >
        Patikaiz'e Hoşgeldiniz! <br />
        Her Yaprakta bir hikaye saklı.
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

      {/* Mobil görünüm için MenuBar */}
      <div className="d-md-none">
        <MenuBar />
      </div>
    </>
  );
}
