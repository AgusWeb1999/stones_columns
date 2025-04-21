import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import columnImage4 from "../images/column4.jpg";
import columnImage5 from "../images/column5.jpg";

import columnImage8 from "../images/column8.jpg";
import columnImage9 from "../images/column9.jpg";
import columnImage11 from "../images/column11.jpg";
import columnImage13 from "../images/column13.jpg";


const balusters = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 imágenes al mismo tiempo
    slidesToScroll: 1, // Desplazarse de una en una
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Flechas para navegar
  };

  const sliderData = [
    {
      title: "Balusters",
      subtitle: "Balusters columns for your house",
      images: [
        columnImage9,
        columnImage8,
        columnImage11,
        columnImage4,
        columnImage5,
        columnImage13,
      ],
    },
  ];
  

  const handleImageClick = (src) => {
    window.open(src, "_blank"); // Abre la imagen en una nueva pestaña
  };

  return (
    <div className="gallery-container">
      {sliderData.map((slider, index) => (
        <div key={index} className="slider-wrapper-with-button">
          <div className="slider-wrapper">
            
            <h1 className="slider-title">{slider.title}</h1>
            <p className="slider-subtitle">{slider.subtitle}</p>
          </div>
          <div>
            <Slider {...settings}>
              {slider.images.map((image, i) => (
                <div
                  key={i}
                  className="slider-image"
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image} alt={`Imagen ${i + 1} del ${slider.title}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="galery-button">
            <Link to="/contact" className="btn">
              Contact us
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default balusters;