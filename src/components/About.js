import React from "react";
import { FaLightbulb, FaBullseye, FaFlag } from "react-icons/fa";
import BackgroundSVG from "../assets/wave.svg";

const About = () => {
  return (
    <section id="about" className="text-white text-gray-900 py-11 scroll-mt-20 min-h-screen justify-center items-center"
    style={{
      backgroundColor: "#E42B2F",
      backgroundImage: `url(${BackgroundSVG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        
        {/* Título y descripción */}
        <h2 className="text-4xl font-bold text-[#F2A81D] mb-8">Sobre Nosotros</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          En <span className="font-semibold text-[#3DD1F2]">Joy Technologies SAS</span>, fusionamos innovación y tecnología para crear experiencias únicas e inolvidables.
        </p>

        {/* Tarjetas de Filosofía, Visión y Misión */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Filosofía */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 hover:scale-105">
            <FaLightbulb className="text-[#D91A73] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Filosofía</h3>
            <p className="text-gray-300 text-lg">
              Innovamos con propósito, creando experiencias interactivas que fortalecen la conexión entre las personas.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 hover:scale-105">
            <FaBullseye className="text-[#F2A81D] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Visión</h3>
            <p className="text-gray-300 text-lg">
              Ser líderes en tecnología interactiva, transformando espacios en entornos modernos y dinámicos.
            </p>
          </div>

          {/* Misión */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 hover:scale-105">
            <FaFlag className="text-[#3DD1F2] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Misión</h3>
            <p className="text-gray-300 text-lg">
              Diseñamos soluciones tecnológicas innovadoras que generan impacto y crean experiencias inolvidables.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
