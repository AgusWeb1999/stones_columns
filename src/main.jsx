import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal de tu aplicación
import './app.css'; // Importa tus estilos personalizados después de Bootstrap

// Usa createRoot para gestionar el árbol principal de React
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);