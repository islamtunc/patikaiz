// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import ForYouFeed from "./ForYouFeed";
import { Card } from "react-bootstrap";
function page() {
  return (
    <div>
    <Card style={{ marginTop: "20px", width: "100%", maxWidth: "700px", textAlign: "center", padding: "19px" }}>
        <Card.Title>Hediye Kutusu</Card.Title>
        <Card.Body>
          <ForYouFeed />
          <h1>Tema Seçin</h1>
      
      <Card style={{height:55,background:"green"}}></Card>

            <Card style={{height:55,background:"blue"}}></Card>

        </Card.Body>
      </Card>
    </div>
  )
}

export default page