/*import React, { useState, useEffect } from "react";
import "../css/CarouselComponent.css"; // Asegúrate de crear este archivo para los estilos
import image1 from "../images/WhatsApp Image 2025-03-31 at 17.00.10_486a56b6.jpg";
import image2 from "../images/WhatsApp Image 2025-03-31 at 17.00.10_4e2da799.jpg";
import image3 from "../images/WhatsApp Image 2025-03-31 at 17.00.12_97f909fa.jpg";

const images = [image1, image2, image3];

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094; {/* Flecha izquierda */
      /*}
      </button>
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095; {/* Flecha derecha *//*  }
    </button>
    </div>
  );
}

export default CarouselComponent;*/