import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import About from "./About";
import Services from "./Services";
import Benefits from "./Benefits";
import Contact from "./Contact";
import video1 from "../assets/FUTURISTAS.mp4";
import video2 from "../assets/FUTURISTAS1.mp4";
import video3 from "../assets/FUTURISTAS2.mp4";
import video4 from "../assets/FUTURISTAS3.mp4";
import video5 from "../assets/FUTURISTAS4.mp4";
import video6 from "../assets/FUTURISTAS5.mp4";


// Colores de bordes
const videoBorderColors = [
  "#1789C8", "#E71551", "#F2911B", "#E62A30", "#F2A81D", "#3DD1F2", "#D91A73", "#F2A81D", "#3DD1F2", "#D91A73"
];

// Función para obtener un color aleatorio de la lista
const getRandomBorderColor = () => {
  const randomIndex = Math.floor(Math.random() * videoBorderColors.length);
  return videoBorderColors[randomIndex];
};

const phoneNumber = "+573014168993";

const Home = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Quiero saber más sobre sus servicios");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative bg-white" >
      {/* Sección de Inicio */}
      <div 
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-40"
      >
        {/* Collage de Videos */}
        <div 
          className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 xl:gap-14 px-6"
        >
          {/* Videos para pantallas pequeñas */}
          <div className="md:hidden w-full aspect-video overflow-hidden rounded-xl shadow-lg" 
           style={{ border: `4px solid ${getRandomBorderColor()}` }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="md:hidden w-full aspect-video overflow-hidden rounded-xl shadow-lg" 
           style={{ border: `4px solid ${getRandomBorderColor()}` }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={video6} type="video/mp4" />
        </video>
      </div>
      <div className="md:hidden w-full aspect-video overflow-hidden rounded-xl shadow-lg" 
           style={{ border: `4px solid ${getRandomBorderColor()}` }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={video5} type="video/mp4" />
        </video>
      </div>

          {/* Videos para pantallas grandes */}
          <div 
            className="hidden md:block w-full h-32 md:h-40 xl:h-48 overflow-hidden rounded-xl shadow-lg transform transition duration-500 rotate-2 hover:rotate-0"
            style={{ border: `4px solid ${getRandomBorderColor()}` }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={video1} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          <div 
            className="hidden md:block w-full h-32 md:h-40 xl:h-48 overflow-hidden rounded-xl shadow-lg transform transition duration-500 rotate-3 hover:rotate-0"
            style={{ border: `4px solid ${getRandomBorderColor()}` }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={video2} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          <div 
            className="hidden md:block w-full h-32 md:h-40 xl:h-48 overflow-hidden rounded-xl shadow-lg transform transition duration-500 rotate-1 hover:rotate-0"
            style={{ border: `4px solid ${getRandomBorderColor()}` }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={video3} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          <div 
            className="hidden md:block w-full h-32 md:h-40 xl:h-48 overflow-hidden rounded-xl shadow-lg transform transition duration-500 rotate-4 hover:rotate-0"
            style={{ border: `4px solid ${getRandomBorderColor()}` }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={video4} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          <div 
            className="hidden md:block w-full h-32 md:h-40 xl:h-48 overflow-hidden rounded-xl shadow-lg transform transition duration-500 rotate-5 hover:rotate-0"
            style={{ border: `4px solid ${getRandomBorderColor()}` }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={video5} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          <div 
            className="hidden md:block w-full h-32 md:h-40 xl:h-48 overflow-hidden rounded-xl shadow-lg transform transition duration-500 rotate-4 hover:rotate-8"
            style={{ border: `4px solid ${getRandomBorderColor()}` }}
          >
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={video6} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        </div>
      </div>

      {/* Secciones sin Animación */}
      <div className="relative min-h-screen">
        <Services />
      </div>
      <div className="relative min-h-screen" >
        <Benefits />
      </div>
      <div className="relative min-h-screen" >
        <About />
      </div>
      <div className="relative min-h-screen">
        <Contact />
      </div>

      {/* Botón flotante de WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center text-4xl z-50 animate-bounce"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default Home;
