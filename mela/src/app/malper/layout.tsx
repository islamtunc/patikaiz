// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber
// Hasbunallahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil aliyyil azim

import { redirect } from "next/navigation";
import MenuBar from "./components/mmenu";
import Navbar from "./components/mmnav";
import { Row, Col, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/mmbingeh";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Row>
          <Col md={9}>
            {children}





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






