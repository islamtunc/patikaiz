// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const categories = [
  { id: 1, name: "Emlak", icon: "🏠" },
  { id: 2, name: "Vasıta", icon: "🚗" },
  { id: 3, name: "İkinci El ve Sıfır Alışveriş", icon: "🛒" },
  { id: 4, name: "İş Makineleri", icon: "🚜" },
  { id: 5, name: "Yedek Parça", icon: "🔧" },
  { id: 6, name: "İş İlanları", icon: "💼" },
  { id: 7, name: "Hayvanlar Alemi", icon: "🐾" },
  { id: 8, name: "Hizmetler", icon: "🛠️" },
];

function Page() {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Kategoriler</h1>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="fs-1">{category.icon}</div>
                <Card.Title className="mt-3">{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Page;