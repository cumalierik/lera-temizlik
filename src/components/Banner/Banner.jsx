import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/png-1.jpg";
import sliderImg1 from "../../assets/images/slider/png-2.jpg";
import sliderImg2 from "../../assets/images/tour/png-7.jpg.jpg"
import "../Banner/Banner.css"


const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                 TEMİZLİĞE DAİR HERŞEY
                </h5>
                <p className="sub_text">
                 Sağlıklı Bir Yaşam Ancak Temizlik İle  Mümkün Olabilir...
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="Second slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                Sağlık için temizlik ,  <span>temizlik için LERA..!</span>
                </h5>
                <p className="sub_text">
                  Eğer  Profesyonel Bir Temizlik Hizmetine İhtiyacınız varsa
                     Hemen Bizle İletişime GEÇİN..!!!
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="Second slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                Siz hayal edin, biz temizleyelim...
                </h5>
                <p className="sub_text">
                Hayal ettiğiniz temizlik standartlarına, en ince ayrıntısına kadar özen göstererek ulaşmanızı sağlıyoruz...
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
