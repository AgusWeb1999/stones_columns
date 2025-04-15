import React from "react";
import "../css/Services.css";
import { Link } from 'react-router-dom';
import icon_column from "../images/columna-decorativa.png";
import icon_pavers from "../images/adoquin.png";
import icon_pool from "../images/piscina.png";


function Service() {
  return (
    <div>
      <div className="service-content">
        <p className="service-description">
          We offer a wide range of services to meet your needs. Discover what we
          can do for you!
        </p>
        <div className="service-cards">
          <div className="service-card">
            <img src={icon_column} alt="Service Column" />
            <h2>Stone Columns</h2>
            <p>
              Design and installation of stone columns for interiors and
              exteriors.
            </p>
          </div>
          <div className="service-card">
            <img src={icon_pavers} alt="Service Pavers" />
            <h2>Pavers</h2>
            <p>
              Repair and restoration of old columns to bring back their
              splendor.
            </p>
          </div>
          <div className="service-card">
            <img src={icon_pool} alt="Service Pool" />
            <h2>For pool</h2>
            <p>Creation of unique columns tailored to your needs and style.</p>
          </div>
        </div>
      </div>
      <div className="gallery-home">
        <h2 className="gallery-invite">
          Take a look at our gallery to see examples of our work and get
          inspired for your next project!
        </h2>
        <div className="gallery-button">
          <Link to="/galery" className="btn">View Our Gallery</Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
