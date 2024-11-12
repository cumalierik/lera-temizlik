import React, { useEffect, useState } from "react";
import { Container, Navbar, Offcanvas, Nav, Modal, Button, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import logo from '../../../assets/images/logo/logo8.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAboutModalOpen = () => {
    setShowAboutModal(true);
  };

  const handleAboutModalClose = () => {
    setShowAboutModal(false);
  };

  const handleContactModalOpen = () => {
    setShowContactModal(true);
  };

  const handleContactModalClose = () => {
    setShowContactModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  const services = [
    'Ev Temizliği',
    <hr />,
    'Boş Daire Temizliği',
    <hr />,
    'Cafe Temizliği',
    <hr />,
    'Ofis Temizliği',
    <hr />,
    'Zemin Temizliği',
    <hr />,
    'Koltuk Yıkama',
    <hr />,
    'Halı Yıkama',
    <hr />,
    'Cam Silme',
    <hr />,
    'Pencere Temizliği',
    <hr />,
    'İnşaat Sonrası Temizlik',
    <hr />,
    'Endüstriyel Temizlik',
    <hr />,
    'Bina ve Apartman Temizliği',
    <hr />,
    'Dış Cephe Temizliği',
    <hr />,
    'Havuz Temizliği',
  ];

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          <Navbar.Brand>
            <NavLink to="/">
              <img src={logo} alt="Lera Cleaning Logo" style={{ height: '70px' }} />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">Lera cleaning</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  Anasayfa
                </NavLink>
                <NavLink className="nav-link" to="#" onClick={handleModalOpen}>
                  HİZMETLERİMİZ
                </NavLink>
                <NavLink className="nav-link" to="#" onClick={handleAboutModalOpen}>
                  Hakkımızda
                </NavLink>
                <NavLink className="nav-link" to="/galeri">
                  GALERİ
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block" to="#" onClick={handleContactModalOpen}>
              BİZE ULAŞIN
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>


        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hizmetlerimiz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleModalClose}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showAboutModal} onHide={handleAboutModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hakkımızda</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Hakkımızda:</h5>
            <br />
            <p>

              leraCleaning, profesyonel temizlik hizmetleri sunan bir şirkettir. 2012 yılından bu yana Teknopark'ta faaliyet gösteren yaklaşık 60 firma için ofis temizliği konusunda üstün hizmet sunmaktayız. Müşterilerimize yüksek kaliteli temizlik çözümleri sağlamak için deneyimli ve eğitimli personel ile çalışıyoruz. Ev temizliği, ofis temizliği, halı yıkama gibi çeşitli hizmetlerimizle sizlerin hizmetindeyiz. Temizlik deneyiminizi en üst düzeye çıkarmak için bizimle iletişime geçin.
            </p>
          </Modal.Body>
          <Modal.Body>
            <hr />
            <h5>Vizyonumuz:</h5>
            <br />
            <p>
              <b>Temizliği ve ulaşımı bir araya getirerek sektördeki en yenilikçi ve kaliteli hizmet sağlayıcısı olmak.</b>
            </p>
            <hr />
            <h5>Misyonumuz:</h5>
            <br />

            <p>
              Müşterilerimize birinci sınıf ulaşım hizmetleri ile entegre edilmiş üstün temizlik çözümleri sunarak, onların ihtiyaçlarına özel ve etkili hizmetler sağlamak.
            </p>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={handleAboutModalClose}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showContactModal} onHide={handleContactModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bize Ulaşın</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>İletişim bilgileri:</p>
            <br />
            <ul>
              <li>Email: <a href="mailto:info@leracleaning.com">info@leracleaning.com</a></li>
              <br />
              <li>Telefon: <a href="tel:+02124342230"> (0212) 434 22 30 </a></li>
              <hr />
              <li>Adres: Fevzi Çakmak Mahallesi Fevzi Çakmak Caddesi No:51/A Esenler İstanbul</li>
            </ul>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleContactModalClose}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </header>
  );
};

export default Header;
