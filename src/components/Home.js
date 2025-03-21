import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import About from "./About";
import Services from "./Services";
import Benefits from "./Benefits";
import Contact from "./Contact";
import video1 from "../assets/FUTURISTAS.mp4";
import video2 from "../assets/FUTURISTAS1.mp4";
import video3 from "../assets/FUTURISTAS2.mp4";
import video4 from "../assets/FUTURISTAS.mp4";
import video5 from "../assets/FUTURISTAS1.mp4";
import video6 from "../assets/FUTURISTAS2.mp4";
import BackgroundSVG from "../assets/wave.svg";

const phoneNumber = "1234567890";

const Home = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Quiero saber más sobre sus servicios");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Sección de Inicio con Collage de Videos y Slogan */}
      <div 
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-40"
        style={{
          backgroundColor: "rgba(192, 238, 248, 0.3)", // Opacidad del 30%
          backgroundImage: `url(${BackgroundSVG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Contenedor del Collage de Videos */}
        <div className="relative w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mt-30">
          {[video1, video2, video3, video4, video5, video6].map((video, index) => (
            <div key={index} className={`w-32 h-32 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl border-4 ${index % 2 === 0 ? "border-pink-400 rotate-[-6deg]" : "border-blue-400 rotate-[6deg]"} hover:rotate-0 transition-all duration-300`}>
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={video} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
          ))}
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
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center text-3xl md:text-4xl z-50"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default Home;
