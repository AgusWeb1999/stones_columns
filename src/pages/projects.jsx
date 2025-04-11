import React from "react";
import "../css/projects.css";
import { Link } from "react-router-dom"; 

// Importa las imágenes directamente
import bathroomImage from "../images/WhatsApp Image 2025-03-31 at 17.00.10_3a0332df.jpg";
import kitchenImage from "../images/WhatsApp Image 2025-03-31 at 17.00.14_8edf9ea6.jpg";
import otherProjectsImage from "../images/WhatsApp Image 2025-03-31 at 17.00.13_fbd6c1f3.png";

function Projects() {
  const projects = [
    {
      title: "Bathrooms",
      description:
        "We specialize in modern and elegant bathroom designs that combine functionality and aesthetics.",
      image: bathroomImage, // Usa la imagen importada
    },
    {
      title: "Kitchen",
      description:
        "Our kitchens are designed to be the heart of your home, blending style and practicality.",
      image: kitchenImage, // Usa la imagen importada
    },
    {
      title: "Other Projects",
      description:
        "Explore our diverse range of projects, from living rooms to outdoor spaces, tailored to your needs.",
      image: otherProjectsImage, // Usa la imagen importada
    },
  ];

  return (
    <div className="projects-page">
      <div className="card-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <Link to="/contact" className="get-quote-button">
              Get Quote
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;