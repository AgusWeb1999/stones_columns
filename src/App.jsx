import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import CarouselComponent from "./components/CarouselComponent";
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/projects";
import Services from "./pages/services";
import WhatsAppButton from "./components/WhatsAppButton"; 
import "./App.css";
import logo_secundario from './images/logo_secundario.png'; 

function App() {
  return (
    <Router>
      <div className="app">
        <NavComponent />
        <Routes>
          <Route
            path="/"
            element={
              <div className="carousel-container">
                <div className="carousel-text">
                  <div className="carousel-principal-text">
                    <img src={logo_secundario} alt="Logo" />
                    <h1>Welcome to Steelframing Construction</h1>
                    <p>We specialize in modern and innovative construction solutions.</p>
                  </div>
                  <div className="carousel-button">
                    <Link to="/projects" className="btn">
                    View Our Projects
                    </Link>
                  </div>
                </div>
                <CarouselComponent />
              </div>
            }
            
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent />
        <WhatsAppButton /> 
      </div>
    </Router>
  );
}

export default App;

