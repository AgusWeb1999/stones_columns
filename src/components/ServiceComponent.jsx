import React from "react";
import "../css/Services.css";
import { Link } from 'react-router-dom';

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
            <img src="./images/service1.jpg" alt="Service 1" />
            <h2>Column Installation</h2>
            <p>
              Design and installation of stone columns for interiors and
              exteriors.
            </p>
          </div>
          <div className="service-card">
            <img src="./images/service2.jpg" alt="Service 2" />
            <h2>Restoration</h2>
            <p>
              Repair and restoration of old columns to bring back their
              splendor.
            </p>
          </div>
          <div className="service-card">
            <img src="./images/service3.jpg" alt="Service 3" />
            <h2>Custom Design</h2>
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
