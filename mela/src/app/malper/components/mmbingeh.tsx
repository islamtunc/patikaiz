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

const Footer = () => (
  <footer className="bg-dark text-white pt-4">
    <div className="container text-center text-md-left">
      <Card>
        {/* Hakkımızda */}
        <Alert  variant="info">
          <h5 className="text-uppercase font-weight-bold">Hakkımızda</h5>
          <p>
            Kullanıcılarımıza en iyi hizmetleri ve kaynakları sunmayı hedefliyoruz. Güncellemeler ve haberler için bizimle iletişimde kalın.
          </p>
        </Alert>

        {/* Hızlı Linkler */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Hızlı Linkler</h5>
          <ul className="list-unstyled">
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
            
              <NavDropdown.Item href="/admin" >
            
            Yonetim
              </NavDropdown.Item>
            </Alert>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </Card>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} Tüm hakları saklıdır:{" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad
      </a>
    </div>
  </footer>
);

export default Footer;

// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammaden Abduhu ve Resuluhu
// La havle ve la kuvvete illa billahil aliyyil azim
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin