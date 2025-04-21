import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import columnImage14 from "../images/column14.jpg";
import columnImage15 from "../images/column15pool.jpg";
import columnImage16 from "../images/column16pool.jpg";
import columnImage17 from "../images/column18pool.jpg";
import columnImage19 from "../images/column19trabajando.jpg";

const another = () => {
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
      title: "Another jobs",
      subtitle: "Ask about our other work",
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

        </div>
      ))}
    </div>
  );
};

export default another;