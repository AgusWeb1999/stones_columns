import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; 
import "../css/galery.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kitchenImage1 from "../images/kitchen remodel.jpg";

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
      title: "Cocinas Modernas",
      subtitle: "Diseños funcionales y elegantes",
      images: [
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
      ],kitchenImage1
    },
    {
      title: "Baños de Lujo",
      subtitle: "Espacios acogedores y modernos",
      images: [
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
      ],
    },
    {
      title: "Salones Elegantes",
      subtitle: "Estilo y confort en un solo lugar",
      images: [
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
        kitchenImage1,
      ],kitchenImage1
    },
  ];
  

  const handleImageClick = (src) => {
    window.open(src, "_blank"); // Abre la imagen en una nueva pestaña
  };

  return (
    <div className="gallery-container">
      {sliderData.map((slider, index) => (
        <div key={index} className="slider-wrapper">
          <h1 className="slider-title">{slider.title}</h1>
          <p className="slider-subtitle">{slider.subtitle}</p>
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
      ))}
    </div>
  );
};

export default Galery;