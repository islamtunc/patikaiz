// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import SearchField from "@/mcomponents/SearchField";
// Fix Radix Tabs imports (use named exports Root/List/Trigger/Content)
import {
  Root as Tabs,
  List as TabsList,
  Trigger as TabsTrigger,
  Content as TabsContent,
} from "@radix-ui/react-tabs";
import Image from "react-bootstrap/Image";

const products = [
  {
    id: "p1",
    title: "Sevgili Temalı Duvar Takvimi",
    category: "for-you",
    price: 110,
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    desc: "Romantik illüstrasyonlar, parlak baskı, A2/A3 seçenekleri.",
  },
  {
    id: "p2",
    title: "Anneler Günü Özel Takvim",
    category: "dayik",
    price: 120,
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80",
    desc: "Kişiselleştirilebilir fotoğraf alanı, hediye paketi seçeneği.",
  },
  {
    id: "p3",
    title: "Babalar Günü Takvimi",
    category: "bav",
    price: 95,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    desc: "Şık ve sade tasarım, A3 baskı.",
  },
  {
    id: "p4",
    title: "Öğretmenler Günü Takvimi",
    category: "mamoste",
    price: 100,
    img: "https://images.unsplash.com/photo-1505575967457-43174fbf4f12?auto=format&fit=crop&w=900&q=80",
    desc: "Eğitim temalı illüstrasyonlar, toplu siparişlerde indirim.",
  },
  {
    id: "p5",
    title: "Doğum Günü Temalı Takvim",
    category: "rojbun",
    price: 85,
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
    desc: "Renkli ve eğlenceli sayfalar, sticker ile birlikte.",
  },
];

function renderProductGrid(tabValue: string) {
  const list = products.filter((p) => p.category === tabValue);
  return (
    <Row className="g-4">
      {list.map((p) => (
        <Col key={p.id} xs={12} md={6} lg={4}>
          <Card className="h-100">
            <div style={{ padding: 0 }}>
              <Image src={p.img} alt={p.title} fluid className="w-100" style={{ height: 180, objectFit: "cover" }} />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-1" style={{ fontSize: 18 }}>{p.title}</Card.Title>
              <Card.Text className="text-muted small mb-3" style={{ flex: 1 }}>{p.desc}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">{p.price} TL</div>
                  <div className="text-muted small">Boyutlar: A3, A2</div>
                </div>
                <div className="d-flex flex-column">
                  <Button variant="outline-primary" size="sm" className="mb-2" onClick={() => alert("Ürün eklendi: " + p.title)}>Sepete Ekle</Button>
                  <Button variant="primary" size="sm" onClick={() => (window.location.href = "mailto:satis@duvartakvimi.com?subject=" + encodeURIComponent(p.title))}>Sipariş</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {list.length === 0 && (
        <Col>
          <div className="p-4 text-muted">Bu kategoride ürün bulunamadı.</div>
        </Col>
      )}
    </Row>
  );
}

function page() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-0">
      <div className="w-full min-w-0 space-y-5">
        <style>{`
          /* simple tab styles to avoid layout/CSS issues */
          .tabs-list { display:flex; gap:12px; align-items:center; border-bottom:1px solid #e6e6e6; padding:6px 0; flex-wrap:wrap; }
          .tabs-trigger { padding:8px 12px; border-radius:8px; cursor:pointer; background:transparent; color:#333; font-weight:600; border:1px solid transparent; }
          .tabs-trigger[aria-selected="true"] { background:#0ea5a3; color:white; border-color:#0ea5a3; }
          .tabs-content { padding:12px 0; }
          @media (max-width: 640px) {
            .tabs-list { gap:8px; }
            .tabs-trigger { padding:6px 10px; font-size:14px; }
          }
        `}</style>

        <Tabs defaultValue="for-you">
          <TabsList className="tabs-list" aria-label="Takvim Sekmeleri">
            <TabsTrigger className="tabs-trigger" value="for-you">takvîm + cam</TabsTrigger>
            <TabsTrigger className="tabs-trigger" value="dayik">takvim +dunya kuresi</TabsTrigger>
            <TabsTrigger className="tabs-trigger" value="bav">takvim +kum saati</TabsTrigger>
            <TabsTrigger className="tabs-trigger" value="mamoste">takvim +defter +kalem</TabsTrigger>
          </TabsList>

          <div className="tabs-content">
            <TabsContent value="for-you">{renderProductGrid("for-you")}</TabsContent>
            <TabsContent value="dayik">{renderProductGrid("dayik")}</TabsContent>
            <TabsContent value="bav">{renderProductGrid("bav")}</TabsContent>
            <TabsContent value="mamoste">{renderProductGrid("mamoste")}</TabsContent>
            <TabsContent value="rojbun">{renderProductGrid("rojbun")}</TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}

export default page;