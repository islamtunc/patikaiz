// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune u Hezreti Muhammed (s.a.v) ji qul u resule Allah e.
"use client";
import React from "react";
import { Alert, Card, Nav, NavDropdown } from "react-bootstrap";
import Bkrhnr from "./yasal/mmbikarhnr";
import Frtn from "./yasal/mmfrtn";
import Vsrtn from "./yasal/mmvsrtn";
import { AlertTriangle } from "lucide-react";
import AllCollapseExample from "./derbare";

const Footer = () => (
  <Card style={{textAlign:"center"}}>
        {/* Hakkımızda */}
    
          
          <AllCollapseExample/>
      


            <Alert variant="warning" className="p-2 mb-2">
            
                
            
              <NavDropdown title="Yasal" id="basic-nav-dropdown-2">
              <NavDropdown.Item ><Vsrtn/></NavDropdown.Item>
              <NavDropdown.Item><Frtn/></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Bkrhnr/>
              </NavDropdown.Item>
            </NavDropdown>
            
           </Alert>
            <Alert variant="warning" className="p-2 mb-2"
            >
                <NavDropdown.Item >
              Hizmetler
              </NavDropdown.Item>
            </Alert>
            <Alert>
            
              <NavDropdown.Item href="/login" >
            
            Yonetim
              </NavDropdown.Item>
            </Alert>
      


         <div className="text-center py-3">
      © {new Date().getFullYear()} Tüm hakları saklıdır:{" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad
      </a>
    </div>
      </Card>
  

 
 
);

export default Footer;

// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammaden Abduhu ve Resuluhu
// La havle ve la kuvvete illa billahil aliyyil azim
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin