// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import BasicExample from "./components/mmslide";
import { Alert, Card } from "react-bootstrap";
import mm from "../../../public/rjd.jpg";

function ContainerFluidExample() {
  return (
    <Container fluid>
      <br /> <br />
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <Card
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.95,
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Sağlıklı Yaşamın Yolculuğuna Hoş Geldiniz</Card.Title>
              <Card.Text>
                <br />
                Beslenme, sadece ne yediğimiz değil, nasıl hissettiğimizin de bir yansımasıdır.
                <br />
                <br />
                Bilimsel temellere dayalı, kişiye özel beslenme planlarıyla hem bedeninizi hem de yaşam kalitenizi dönüştürmek mümkün.
                <br />
                <br />
                Merak ettiğiniz ve doğru bildiğiniz beslenme ve sağlık bilgileri için sitemizi takip edin.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
        
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.95,
              color: "black",
              textAlign: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Merhaba</Card.Title>
              <Card.Text>
                <p>
                  Ben Diyetisyen Rojda Musa, bu yolculukta size rehberlik etmek
                  için buradayım. Kilo yönetimi, hastalıklarda beslenme, sporcu
                  beslenmesi ve sürdürülebilir yaşam tarzı değişiklikleriyle
                  hedeflerinize ulaşmanız için yanınızdayım.
                </p>
                <br />
                <p>
                  Gerçek sonuçlar için güvenilir bilgi, samimi iletişim ve
                  sürdürülebilir çözümler arıyorsanız doğru yerdesiniz. Online
                  Diyet ve Beslenme danışmanlığı için iletişim seçeneklerinden
                  bizimle iletişime geçiniz.
                </p>
                <br />
                <p>Sağlıklı bir geleceğe birlikte adım atalım.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <BasicExample
            nav="Hastalıklar ve Beslenme"
            nivis="Her hastalığın kendine özel beslenmesi bulunmaktadır ve sahip olunan hastalığa göre özel diyet içerikleri uygulanmalıdır. Hastalıklar ve Beslenme için detaylı bilgilere yazılarımızdan ulaşabilirsiniz."
            cih="/malper/mmkargeh"
          />
        </Col>

        <Col>
          <BasicExample
            nav="Psikoloji ve Beslenme"
            nivis="Zaman zaman duygu durumlarımız değişiklik gösterebilmektedir ve bu durumda beslenme alışkanlıklarımızda değişebilmekte ve sağlıksız bir beslenme çeşidine yönelmekteyiz. Bu durumlarla nasıl başa çıkmalıyız? Detaylara yazılarımızdan ulaşabilirsiniz."
            cih="/malper/mmkinc"
          />
        </Col>

        <Col>
          <BasicExample
            nav="Diyet Çeşitleri"
            nivis="Belirli hastalık ve beslenme tarzlarında yapılan diyet farklılık gösterebilmektedir. Bazen yağdan, bazen karbonhidrattan ya da proteinden zengin beslenmeler öne çıkabilmektedir. Hangi hastalık durumunda hangi diyet çeşidini tercih etmeliyiz sorusu için detaylı bilgilere diyet çeşitleri yazılarımızdan ulaşabilirsiniz."
            cih="/malper/mmwesayit"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <BasicExample
            nav="Sporcu Beslenmesi"
            nivis="Spor ve Beslenme birbirinden ayrılmaz bir ikilidir ve her spor çeşidinde beslenme farklılık gösterebilmektedir. Detaylı bilgilere spor ve beslenme yazılarımızdan ulaşabilirsiniz."
            cih="/malper/mmavahi"
          />
        </Col>

        <Col>
          <BasicExample
            nav="Çocuk ve Ergen"
            nivis="Her yaş kategorisi farklı bir beslenme programı içermektedir. Belirli yaşlarda alınan vitamin ve mineraller önem göstermektedir. Çocuk ve ergenlerde beslenmede detaylı bilgilere yazılarımızdan ulaşabilirsiniz."
            cih="/malper/mmhewcedari"
          />
        </Col>

        <Col>
          <BasicExample
            nav="Sağlıklı Tarifler"
            nivis="Yaptığımız öğün sayısı ve aldığımız kalori kadar yediğimiz öğünlerin besin içerikleri de önemlidir. En sağlıklı beslenme tariflerine yazılarımızdan ulaşabilirsiniz."
            cih="/malper/mmkedkar"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;