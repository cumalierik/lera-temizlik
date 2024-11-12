import React from 'react'
import "../Features/features.css"
import feature1 from "../../assets/images/feature/png-1.jpg"
import feature2 from "../../assets/images/feature/png-2.jpg"
import feature3 from "../../assets/images/feature/png-3.jpg"
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          arrows: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,  
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "#ProfesyonelTemizlik",
      des: "Uzman ekibimizle ofis ve ev temizliğinde mükemmel sonuçlar!",
    },
    {
      id: 1,
      image: feature2,
      title: "#HijyenVeSağlık ",
      des: "Temizlikte hijyen ve sağlığı ön planda tutuyoruz.,",
    },
    {
      id: 2,
      image: feature3,
      title: "#SonTeknolojiEkipmanlar ",
      des: " Temizlikte en son teknoloji ürünü ekipmanlar kullanıyoruz.",
    },
  ];

  return (
    <>
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <div key={inx}className='img-box'>
                    <Card >
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
