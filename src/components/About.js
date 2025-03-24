import React from "react";
import { FaLightbulb, FaBullseye, FaFlag } from "react-icons/fa";
import BackgroundSVG from "../assets/wave.svg";

const About = () => {
  return (
    <section
      id="about"
      className="text-white text-gray-900 py-11 scroll-mt-20 min-h-screen justify-center items-center"
      style={{
        backgroundColor: "#E42B2F",
        backgroundImage: `url(${BackgroundSVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 w-full">
        {/* Título y descripción */}
        <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight text-center">
          Sobre Nosotros
        </h2>
        <p className="text-lg mx-auto mb-12 font-medium text-gray-300 leading-relaxed text-left max-w-full">
          En <span className="font-bold text-white">Joy Riders SAS</span>, creemos en el poder de la tecnología para transformar espacios y crear experiencias inolvidables. Nuestra misión es diseñar, comercializar y alquilar equipos tecnológicos innovadores que embellecen plazas, fomentan el turismo recreacional y fortalecen los lazos familiares y sociales.
          Desde nuestros inicios, nos hemos comprometido con la creación de entornos donde la diversión, la conexión y el bienestar sean protagonistas. Trabajamos con centros comerciales, distribuidores y organizadores de eventos para ofrecer soluciones tecnológicas que no solo entretienen, sino que también generan impacto positivo en la comunidad.
        </p>

          {/* Tarjetas de Filosofía, Visión y Misión */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Nuestra Filosofía",
              icon: <FaLightbulb className="text-[#D91A73] text-5xl mx-auto" />,
              text: (
                <>
                  ✔ Innovación con propósito: Cada uno de nuestros equipos está diseñado para estimular la interacción y el desarrollo.
                  <br />
                  ✔ Experiencias memorables: Creemos en la importancia de la recreación sana y el fortalecimiento de vínculos familiares.
                  <br />
                  ✔ Compromiso con la calidad: Ofrecemos productos y servicios de alta tecnología con un enfoque en seguridad y durabilidad.
                </>
              ),
            },
            {
              title: "Nuestra Visión",
              icon: <FaBullseye className="text-[#F2A81D] text-5xl mx-auto" />,
              text: "Ser la empresa líder en tecnología recreativa en América Latina, reconocida por su impacto positivo en la comunidad y su capacidad de crear experiencias que despiertan alegría.",
            },
            {
              title: "Nuestra Misión",
              icon: <FaFlag className="text-[#3DD1F2] text-5xl mx-auto" />,
              text: "Proveer soluciones tecnológicas innovadoras para centros comerciales, distribuidores y eventos especiales, promoviendo el entretenimiento sano, el desarrollo infantil y la conexión social.",
            },
          ].map(({ title, icon, text }, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col items-center text-center transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {icon}
              <h3 className="text-2xl font-semibold my-3 text-white">{title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
