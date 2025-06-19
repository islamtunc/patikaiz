// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allahu Ekber velilahi'lhamd
// La ilahe illallah, Allahu Ekber, Allahu Ekber, Allahu
import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* Hakkımızda Bölümü */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Hakkımızda</h5>
          <p>
           Müşterisi Burada Uygulaması, emlak, araç, ikinci el ve daha fazlası için güvenli ve kolay ilan paylaşımı sunar. Hızlıca ilan verin, aradığınızı kolayca bulun!
          </p>
        </div>

        {/* Hızlı Linkler Bölümü */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Hızlı Linkler</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="/ilanlar" className="text-white">
                İlanlar
              </a>
            </li>
            <li>
              <a href="/ilan-ver" className="text-white">
                İlan Ver
              </a>
            </li>
            <li>
              <a href="/iletisim" className="text-white">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya Bölümü */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} Tüm Hakları Saklıdır: {" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad 
      </a>
    </div>
  </footer>
);

export default Footer;