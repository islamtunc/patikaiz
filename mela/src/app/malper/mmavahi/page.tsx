// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Container ,Row,Col} from "react-bootstrap";
import Mteqvim from "../components/mteqvim";
function page() {
  return (
    <div>
      <Container>
        <Row>
          <h1>Malper Takvim Sayfası</h1>
        </Row>

        <Row>

          <Col><Mteqvim/></Col>
                    <Col><Mteqvim/></Col>
          <Col><Mteqvim/></Col>

        </Row>

        <Row>

          <Col><Mteqvim/></Col>
                    <Col><Mteqvim/></Col>
          <Col><Mteqvim/></Col>

        </Row>
      </Container>
    </div>
  )
}

export default page