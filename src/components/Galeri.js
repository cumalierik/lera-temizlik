import React from "react";
import img1 from "../assets/images/Galeri/img1 (2).jpg"
import img2 from "../assets/images/Galeri/cam3.jpg"
import img3 from "../assets/images/Galeri/img2.jpg"

import img4 from "../assets/images/Galeri/img4.jpg"
import img5 from "../assets/images/Galeri/img5.jpg"
import img6 from "../assets/images/Galeri/img6.jpg"

import img7 from "../assets/images/Galeri//img7.jpg"
import img8 from "../assets/images/Galeri/img8.jpg"
import img9 from "../assets/images/Galeri/img9.jpg"

import img10 from "../assets/images/Galeri//img10.jpg"
import img11 from "../assets/images/Galeri/img11.jpg"
import img12 from "../assets/images/Galeri/img12.webp"

import img13 from "../assets/images/Galeri//img13.jpg"
import img14 from "../assets/images/Galeri/img14.webp"
import img15 from "../assets/images/Galeri/img15.jpg"

import img16 from "../assets/images/Galeri//img16.webp"
import img17 from "../assets/images/Galeri/img17.jpg"
import img18 from "../assets/images/Galeri/img18.jpg"

import "../components/Galeri.css"

const Galeri = () => {
    return (
        <div className="gallery-container">
            <h1 className="primaryBtn d-none d-sm-inline-block">GALERİ</h1>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={img1} alt="Açıklama 1" />
                    <p>Levent </p>
                </div>
                <div className="gallery-item">
                    <img src={img2} alt="Açıklama 2" />
                    <p>Maslak</p>
                </div>
                <div className="gallery-item">
                    <img src={img3} alt="Açıklama 3" />
                    <p> YtüTeknopark</p>
                </div>

            </div>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={img4} alt="Açıklama 1" />
                    <p>Bakırköy  </p>
                </div>
                <div className="gallery-item">
                    <img src={img5} alt="Açıklama 2" />
                    <p>Esenlerde  </p>
                </div>
                <div className="gallery-item">
                    <img src={img6} alt="Açıklama 3" />
                    <p>Bahçelievler</p>
                </div>

            </div>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={img7} alt="Açıklama 1" />
                    <p>Bağcılar  </p>
                </div>
                <div className="gallery-item">
                    <img src={img8} alt="Açıklama 2" />
                    <p>Maslak  </p>
                </div>
                <div className="gallery-item">
                    <img src={img9} alt="Açıklama 3" />
                    <p>Kadıköy</p>
                </div>

            </div>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={img10} alt="Açıklama 1" />
                    <p> Ytü Teknopark</p>
                </div>
                <div className="gallery-item">
                    <img src={img11} alt="Açıklama 2" />
                    <p>Ytü Teknopark  </p>
                </div>
                <div className="gallery-item">
                    <img src={img12} alt="Açıklama 3" />
                    <p>Ytü Teknopark</p>
                </div>

            </div>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={img13} alt="Açıklama 1" />
                    <p>Bahçeşehir</p>
                </div>
                <div className="gallery-item">
                    <img src={img14} alt="Açıklama 2" />
                    <p>Başakşehir  </p>
                </div>
                <div className="gallery-item">
                    <img src={img15} alt="Açıklama 3" />
                    <p>Mashak Villaları</p>
                </div>

            </div>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={img16} alt="Açıklama 1" />
                    <p>Şirinevler </p>
                </div>
                <div className="gallery-item">
                    <img src={img17} alt="Açıklama 2" />
                    <p>Örnek Amaçlı  </p>
                </div>
                <div className="gallery-item">
                    <img src={img18} alt="Açıklama 3" />
                    <p>Gültepe levent</p>
                </div>

            </div>
        </div>
    );
};

export default Galeri;
