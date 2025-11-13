// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// La havle vela kuvvete illa billah
// Astagfirullah al azim
// La ilahe illallah, wahdahu la sharika lahu, lahul mulku wa lahul hamdu yuhyi wa yumit wa huwa ala kulli shay'in qadir
// Seyyidena ve nebiyyena Muhammedun abduhu ve rasuluhu
// Subhanallahi wa bihamdihi, subhanallahil azim
// ELHAMDULILLAHI RABBIL 'ALAMIN
// Allah U Ekber ve lillahi'l-hamd

"use client";

import React from 'react'
import { Card } from 'react-bootstrap';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
    
      {children}
      <Card style={{ marginTop: "20px", width: "100%", maxWidth: "700px", textAlign: "center", padding: "19px" }}>
        <Card.Title>Diğer Yazılar</Card.Title>
        <Card.Body>
        </Card.Body>
      </Card>
    </div>
  )
}
