import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import About from './About';
import Services from './Services';
import Benefits from './Benefits';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      {/* Sección de Inicio */}
      <div 
        id="home" 
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('ruta/a/tu/imagen.jpg')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Tecnología que Despierta Alegría</h1>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <a href="#services" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
            Descubre nuestros servicios
          </a>
          <a href="#contact" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
            Cotiza con nosotros
          </a>
        </div>
      </div>

      {/* Sección de Servicios */}
      <Services />

      {/* Sección de Beneficios */}
      <Benefits />

      {/* Sección Sobre Nosotros */}
      <About />

      {/* Sección de Contacto */}
      <Contact />

      {/* Botón flotante de WhatsApp con icono */}
        {/* Botón flotante de WhatsApp con el icono correcto */}
        <a 
      href="https://wa.me/tu_numero" 
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center text-4xl z-50"
    >
      <FaWhatsapp />
    </a>
    </div>
  );
};

export default Home;
