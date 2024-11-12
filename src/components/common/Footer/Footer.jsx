
import React, { useState } from "react";
import "../../common/Footer/Footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">HİZMETLERİMİZ</h4>
              <ListGroup variant="flush">

                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Okul Temizliği</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Ofis Temizliği</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Eczane - Klinik Temizliği</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Cam / zemin / İnşaat Temizliği</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Off-Site ATM Temizliği</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Yatak / Koltuk / Sandalye Yıkama</NavLink>
                </ListGroup.Item>

              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">KURUMSAL  </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Hakkımızda</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">new</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">fag</NavLink>
                </ListGroup.Item>

              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">HIZLI BAĞLANTI</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Anasayfa</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">
                    Hakkımızda
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-caret-right-fill"></i>
                  <NavLink to="/">Bize Ulaşın </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">İLETİŞİM BİLGİLERİ</h4>
              <div className="d-flex align-items-center">

                <p className="pb-2">
                  <i className="bi bi-caret-right-fill"></i>
                  İstanbul / Esenler</p>
              </div>

              <div className="d-flex align-items-top my-2">
                <i className="bi bi-geo-alt me-3"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:leracleaning@gmail.com "
                  className="d-block"
                >
                  leracleaning@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-top ">
                <i className="bi bi-telephone me-3"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:05324012971"
                  className="d-block"
                >
                  0532 401 2971
                </a>
              </div>
              <a
                href="https://wa.me/905324012971"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-floating-button"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </Col>
          </Row>

          <Row className="py-2 bdr mt-3 d-flex justify-content-center align-items-center" >
            <Col className="col copyright text-center">
              <p className="text-light">Telif Hakları © 2024 Lera Cleaning'e aittir  Tüm Hakları Saklıdır.</p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div
        id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Footer;
