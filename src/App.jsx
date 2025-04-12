import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import Contact from "./pages/Contact";
import About from "./pages/About";
import WhatsAppButton from "./components/WhatsAppButton"; 
import BackImageHome from "./components/BackImageHome"; 
import "./App.css";
import Galery from './pages/galery';

function App() {
  return (
    <Router>
      <div className="app">
        <NavComponent />
        <BackImageHome />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <div className="principal-container">
                  <div className="principal-text">
                    <h1>Stone Column Services</h1>
                  </div>
                  <div className="principal-text">
                    <h2>¿Looking for Stone Column Installation Services?</h2>
                    <h3>¡We have over 20 years of experience in the industry to help you!</h3>
                  </div>
                  <div className="princiapl-button">
                    <Link to="#services" className="btn">
                    View Our Services
                    </Link>
                  </div>
                </div>
              </div>
            }
            
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/Galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent />
        <WhatsAppButton /> 
      </div>
    </Router>
  );
}

export default App;

