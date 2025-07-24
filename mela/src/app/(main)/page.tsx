// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
// SUPHANALLAH VELHAMDULİLLAH VE ALLAH U EKBER
// LA İLAHE İLLALLAH U VAHDEHU LA ŞERİKE LEH LEHUL MULKU LEHUL HEMDU VE
// HUVE ALA KULLİ ŞEYİN KADİR






"use client"
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const categories = [
  { id: 1, name: "Emlak", icon: "🏠", link: "/mmavahi" },
];

function Page() {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Kategoriler</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link href={category.link} passHref legacyBehavior>
              <a style={{ textDecoration: "none" }}>
                <Card className="h-100 text-center shadow-sm category-card" style={{ cursor: "pointer" }}>
                  <Card.Body>
                    <div className="fs-1">{category.icon}</div>
                    <Card.Title className="mt-3">{category.name}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Page;