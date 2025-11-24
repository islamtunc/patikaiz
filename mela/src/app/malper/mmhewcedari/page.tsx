// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>Mîmari — Çawa xanîyan têne çêkirin</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon: Nûçe / Pêşkeftin */}
            <Col xs={12} md={7} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "left", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Prosesên sereke yên mîmariyê</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <strong>1) Danûstendin (Brief):</strong> Mîmara û karûbarê xwedî malê pîştrast dikin pêdiviyên, bajar, bûdce û amacên bikarhêner.
                    <br />
                    <br />
                    <strong>2) Analîza malê (site):</strong> Lagehh, hêzên rojê, erdnivîs, qanûn û xwerûtiyên cîhê têne xwendin — ev rêyîdêtinên kararên konseptê ye.
                    <br />
                    <br />
                    <strong>3) Konsept & planên sereke:</strong> Rêxistinên spatial (navendî, rêvî, teren), ax (lay-out) û axa ergonomîk têne çêkirin; alternatîfên konseptî hatin pêşkêş kirin.
                    <br />
                    <br />
                    <strong>4) Pêşveçûna dizaynê (Design Development):</strong> Detayan (struktur, MEP — av, elek., HVAC), materyalan û çarçoveya xercê diyar dikin.
                    <br />
                    <br />
                    <strong>5) Belgrdana çêkirinê (Construction documents):</strong> Plans, spesîfîkasyon, jêderên teknik û belgeyên permitê ji bo lêçûnê û avakirina malê amade dikin.
                    <br />
                    <br />
                    <strong>6) Çalakiya li ser site (Construction administration):</strong> Mîmara kontrol dike, peymana xebatê bi îcraatê ve pêşve dibîne û qebûlkirina dawî dike.
                    <br />
                    <br />
                    <strong>Prensîbên girîng:</strong> tevahîya bikarhêner, daylighting, efikasiyeta enerji, durustkirina materyalan, û binketinî li qanûn û standartan herdem di nav de ne.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kolon: Wêne / Vizuel */}
            <Col xs={12} md={5} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1505842465776-3d8d3f1b4b07?q=80&w=1200&auto=format&fit=crop&crop=entropy"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Mîmari - örnek proje"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Hêzbendek kurt — agahdariyên zêde dikarin li vir zêde bêtin */}
      <Alert variant="info" style={{ maxWidth: "900px", marginTop: "12px" }}>
        Ev rûpel niha ji bo mîmariyê ye — heke tu dixwazî ez vê naverokê wekî komponentên vegerînê (reusable) bikim, belavokê an layoutê guherandî, bibêje.
      </Alert>
    </div>
  );
}

export default page;