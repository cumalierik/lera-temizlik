import React from 'react';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../pages/Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/images/tour/png-10.jpg.jpg";
import img2 from "../assets/images/tour/png-6.jpg.jpg";
import img3 from "../assets/images/tour/koltuk2.jpg";
import img4 from "../assets/images/tour/png-4.jpg.jpg";
import img5 from "../assets/images/tour/png-5.jpg.webp";
import img6 from "../assets/images/tour/ofis.jpg"
import img7 from "../assets/images/tour/png-3.jpg.webp"
import img8 from "../assets/images/tour/cam3.jpg"
import img9 from "../assets/images/tour/koltukyıkma-3.jpg"


import logo1 from '../assets/images/logo/logo1.png'
import logo2 from '../assets/images/logo/logo2.png'
import logo3 from '../assets/images/logo/logo3.png'
import logo4 from '../assets/images/logo/logo4.png'
import logo5 from '../assets/images/logo/logo6 (2).png'
import logo6 from '../assets/images/logo/logo6.png'


const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  const destinationsList = [

    {
      id: 0,
      name: "Ofis Temizliği",
      tours: "",
      image: img1,
      link: "/tour",
      location: "Dehradun"
    },
    {
      id: 1,
      name: "İnşaat Sonra Temizlik",
      tours: "",
      image: img2,
      link: "/tour",
      location: "Paris"
    },
    {
      id: 2,
      name: "Koltuk Yıkama",
      tours: "",
      image: img3,
      link: "/tour",
      location: "Tokyo"
    },
    {
      id: 0,
      name: "Ofis Temizliği",
      tours: "",
      image: img8,
      link: "/tour",
      location: "Dehradun"
    },
    {
      id: 3,
      name: "Cam Silme",
      tours: "",
      image: img4,
      link: "/tour",
      location: "New York"
    },
    {
      id: 4,
      name: "Zemin Yıkama",
      tours: "",
      image: img5,
      link: "/tour",
      location: "Sydney"
    },
    {
      id: 6,
      name: "Ofis Temizlği",
      tours: "",
      image: img6,
      link: "/tour",
      location: "Sydney"
    },
    {
      id: 6,
      name: "Yerinde Halı Yıkama",
      tours: "",
      image: img7,
      link: "/tour",
      location: "Sydney"
    },
    {
      id: 6,
      name: "Yerinde Halı Yıkama",
      tours: "",
      image: img9,
      link: "/tour",
      location: "Sydney"
    },
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6,];

  return (
    <>
      <Banner />
      <Features />


      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Her Temizlik Sonrası Çalışmalarımız</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsList.map((destination) => (
                  <Card key={destination.id} className="destination-card">
                    <Card.Img
                      variant="top"
                      src={destination.image}
                      className="img-fluid"
                      alt={destination.name}
                    />
                    <Card.Body>
                      <Card.Title>{destination.name}</Card.Title>
                      <span className="tours">{destination.tours}</span>
                    </Card.Body>
                  </Card>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Popüler Çalışmalarımız</h1>
              </div>
            </Col>
          </Row>
          <Row>
            {destinationsList.slice(0, 3).map((activity) => (
              <Col md={4} key={activity.id}>
                <Card className="activity-card">
                  <Card.Img
                    variant="top"
                    src={activity.image}
                    className="img-fluid"
                    alt={activity.name}
                  />
                  <Card.Body>
                    <Card.Title>{activity.name}</Card.Title>
                    <span className="tours">{activity.tours}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">Müşteri Memnuniyeti</h5>
              <h2 className="heading">Temizlik Hizmetini Nasıl Alabilirim?</h2>
              <p className="text">
                Güvenilir, referanslı ve deneyimli ekibimizle, ev ve ofislerinizde %100 müşteri memnuniyeti hedefiyle hizmet veriyoruz. Sizin mutluluğunuz, bizim önceliğimiz...
              </p>
            </Col>

          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="brand-wrap-layout1">
        <Container>
          <Row>
            <Col md="12">
              <center>
                <div> <h1> Refaranslarımız</h1></div>
              </center>
              <Slider {...settings}>
                {logos.map((logo, index) => (
                  <div key={index} className="logo-slide">
                    <img
                      src={logo}
                      alt={`Referans Logo ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
