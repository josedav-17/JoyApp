import React from "react";
import { FaWhatsapp, FaTools, FaHandshake } from "react-icons/fa";
import About from "./About";
import Services from "./Services";
import Benefits from "./Benefits";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      {/* Sección de Inicio */}
      <div
        id="home"
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url('ruta/a/tu/imagen.jpg')" }}
      >
        <h1
          className="text-3xl md:text-5xl font-bold px-8 py-4 animate-fade-in"
          style={{
            background: "linear-gradient(90deg, #F01051, #FF7F50)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Tecnología que Despierta Alegría
        </h1>

        {/* Botones de acción */}
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <a
            href="#services"
            className="flex items-center gap-3 bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 text-lg font-semibold transition"
          >
            <FaTools className="text-xl" />
            Descubre nuestros servicios
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 text-lg font-semibold transition"
          >
            <FaHandshake className="text-xl" />
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

      {/* Botón flotante de WhatsApp */}
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
