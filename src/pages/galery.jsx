import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "../css/galery.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import columnImage1 from "../images/column1.jpg";
import columnImage2 from "../images/column2.jpg";
import columnImage3 from "../images/column3.jpg";
import columnImage4 from "../images/column4.jpg";
import columnImage5 from "../images/column5.jpg";
import columnImage6 from "../images/column6.jpg";
import columnImage7 from "../images/column7.jpg";
import columnImage8 from "../images/column8.jpg";
import columnImage9 from "../images/column9.jpg";
import columnImage10 from "../images/column10.jpg";
import columnImage11 from "../images/column11.jpg";
import columnImage13 from "../images/column13.jpg";
import columnImage14 from "../images/column14.jpg";
import columnImage15 from "../images/column15pool.jpg";
import columnImage16 from "../images/column16pool.jpg";
import columnImage17 from "../images/column18pool.jpg";
import columnImage18 from "../images/column18pool.jpg";
import columnImage19 from "../images/column19trabajando.jpg";

const Galery = () => {
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
      title: "Stone Columns",
      subtitle: "outdoor columns for your home",
      images: [
        columnImage9,
        columnImage8,
        columnImage11,
        columnImage4,
        columnImage5,
        columnImage13,
      ],
    },
    {
      title: "For pool",
      subtitle: "outdoor columns for your pool",
      images: [
        columnImage7,
        columnImage2,
        columnImage1,
        columnImage10,
        columnImage3,
        columnImage6,
        columnImage18,
      ],
    },
    {
      title: "Another jobs",
      subtitle: "ask about our other work",
      images: [
        columnImage14,
        columnImage15,
        columnImage16,
        columnImage17,
        columnImage19,
      
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
            <div className="galery-button">
            <Link to="/contact" className="btn">
              Contact us
            </Link>
          </div>
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

        </div>
      ))}
    </div>
  );
};

export default Galery;