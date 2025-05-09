import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import BackImageHome from "./components/BackImageHome";
import "./App.css";
import Galery from "./pages/galery";
import Service from "./components/ServiceComponent";
import ScrollToTop from "./components/ScrollToTop";
import Balusters from "./pages/balusters"; // Asegúrate de que la ruta sea correcta
import Another from "./pages/another"; // Cambia la importación a mayúscula si es necesario

function App() {
  return (
    <Router>
      <ScrollToTop />
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
                    <h2>Looking for Stone Column Services constructions?</h2>
                    <h3>
                      We have over 20 years of experience in the industry to
                      help you!
                    </h3>
                  </div>
                  <div className="princiapl-button">
                    <ScrollLink
                      to="Galery"
                      smooth={true}
                      duration={500}
                      className="btn"
                    >
                      View Our Services
                    </ScrollLink>
                  </div>
                </div>
                <div id="Galery">
                  <Service />
                </div>
              </div>
            }
          />

          <Route path="/Galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/balusters" element={<Balusters />} />
          <Route path="/another" element={<Another />} /> {/* Cambiado a mayúscula */}
        </Routes>
        <FooterComponent />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
