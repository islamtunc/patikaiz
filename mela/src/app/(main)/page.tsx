// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd
"use client"
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const categories = [
  { id: 1, name: "Emlak", icon: "🏠", link: "/mmavahi" },
  { id: 2, name: "Vasıta", icon: "🚗", link: "/mmwesayit" },
  { id: 3, name: "İkinci El ve Sıfır Alışveriş", icon: "🛒", link: "/mmduyem" },
  { id: 4, name: "İnşaat İş İlanları", icon: "🚜", link: "/mmkedkar" },
  { id: 5, name: "Yedek Parça", icon: "🔧", link: "/yedekparca" },
  { id: 6, name: "İş İlanları", icon: "💼", link: "/mmkargeh" },
  { id: 8, name: "Ev Araç Gereçleri", icon: "🛠️", link: "/mmhewcedari" },
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