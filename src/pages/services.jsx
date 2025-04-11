import React from "react";
import { Link } from "react-router-dom"; 
import "../css/services.css"; 
import kitchenImage1 from "../images/kitchen remodel.jpg";
import kitchenImage2 from "../images/04-Kitchen.jpg";
import kitchenImage3 from "../images/WhatsApp Image 2025-03-31 at 17.00.14_8edf9ea6.jpg";
import kitchenImage4 from "../images/WhatsApp Image 2025-03-31 at 17.00.14_c0650b7b.jpg";

import bathroomImage1 from "../images/WhatsApp Image 2025-03-31 at 17.00.09_7bdf6ea9.jpg";
import bathroomImage2 from "../images/WhatsApp Image 2025-03-31 at 17.00.10_3a0332df.jpg";
import bathroomImage3 from "../images/WhatsApp Image 2025-03-31 at 17.00.10_486a56b6.jpg";
import bathroomImage4 from "../images/WhatsApp Image 2025-03-31 at 17.00.12_97f909fa.jpg";

import poolImage1 from "../images/bomba-de-agua-para-piscina.jpg";
import poolImage2 from "../images/bomb.jpg";
import poolImage3 from "../images/Portada-pintar-piscinas-Pinturas-JUNO-768x516.jpg";
import poolImage4 from "../images/WhatsApp Image 2025-03-31 at 17.00.13_fbd6c1f3.png";

import paintingImage1 from "../images/Colores-Naturales-para-pintar-Fachadas.jpg";
import paintingImage2 from "../images/colores-nuetros-para-pintar-fahcas.jpg";
import paintingImage3 from "../images/images.jpg";
import paintingImage4 from "../images/pared-interior-pintura.jpg";

const servicesData = [
  {
    title: "Kitchen Renovations",
    description: "Upgrade your kitchen with modern designs and high-quality finishes.",
    images: [kitchenImage1, kitchenImage2, kitchenImage3, kitchenImage4],
  },
  {
    title: "Bathroom Remodeling",
    description: "Transform your bathroom into a luxurious and functional space.",
    images: [bathroomImage1, bathroomImage2, bathroomImage3, bathroomImage4],
  },
  {
    title: "Pool service",
    description: "High-quality fencing solutions for your pool area.",
    images: [poolImage1, poolImage2, poolImage3, poolImage4],
  },
  {
    title: "Exterior and Interior Painting",
    description: "Enhance your space with our professional painting services.",
    images: [paintingImage1, paintingImage2, paintingImage3, paintingImage4],
  },
];

function Services() {
  return (
    <div className="services-page">
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-images-grid">
              {service.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${service.title} ${imgIndex + 1}`}
                  className="service-image"
                />
              ))}
            </div>
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="contact-button-container">
        <Link to="/contact" className="contact-button">
          CONTACT US FOR A QUOTE
        </Link>
      </div>
    </div>
  );
}

export default Services;