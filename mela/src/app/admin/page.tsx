// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// Subhanallah, Elhamdulillah, Allahu Ekber, La ilahe illallah
// Estağfirulllah El-Azim
"use client"
import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
     

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Duvar Takvimleri </Card.Title>
              <Card.Text>Manage or view the sports nutrition page.</Card.Text>
              <Button variant="primary" href="/mmavahi">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Ozel Gunler</Card.Title>
              <Card.Text>Manage or view the courses page.</Card.Text>
              <Button variant="primary" href="/mmhewcedari">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Hediye Kutusu</Card.Title>
              <Card.Text>Manage or view the services page.</Card.Text>
              <Button variant="primary" href="/mmkedkar">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
      
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Siteye git</Card.Title>
              <Card.Text>Manage or view the site.</Card.Text>
              <Button variant="primary" href="/malper">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;