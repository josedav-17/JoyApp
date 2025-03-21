import React from "react";
import Slider from "react-slick";

import plazas from "../assets/plazas.jpg"; 
import turismo from "../assets/turismo1.jpg"; 
import familia from "../assets/familia.jpg"; 
import parejas from "../assets/parejas.jpg"; 
import recrea from "../assets/recreacion.jpg"; 


const benefits = [
  {
    title: "Promueve el Embellecimiento de Plazas",
    description: "Nuestros equipos tecnológicos aportan un diseño moderno e interactivo a los espacios públicos y comerciales.",
    impact: "🌍 Centros comerciales más atractivos y mayor afluencia.",
    image: plazas,
  },
  {
    title: "Promueve el Turismo Recreacional Sano",
    description: "Nuestros equipos generan puntos de interés dentro de centros comerciales y parques, atrayendo turistas.",
    impact: "🎡 Mayor flujo de turistas y diferenciación en entretenimiento.",
    image: turismo,
  },
  {
    title: "Promueve la Conexión Familiar Padres-Hijos",
    description: "Diseñado para fomentar la interacción entre padres e hijos, creando momentos de juego compartido.",
    impact: "👨‍👩‍👧 Familias más unidas y recuerdos inolvidables.",
    image: familia,
  },
  {
    title: "Promueve la Recreación Sana para los Niños",
    description: "Nuestros equipos ofrecen diversión segura, promoviendo la actividad física y la creatividad.",
    impact: "🎈 Niños felices en un entorno seguro.",
    image: recrea,
  },
  {
    title: "Desarrollo de la Motricidad en Niños",
    description: "Estimula la motricidad gruesa y fina con actividades interactivas.",
    impact: "🧠 Mejor coordinación y estimulación temprana.",
    image: "/images/benefit5.jpg",
  },
  {
    title: "Recreación Sana para Parejas",
    description: "Ideal para que parejas disfruten de momentos juntos en un ambiente acogedor.",
    impact: "💑 Ocio saludable y mayor convivencia.",
    image:  parejas,
  },
];

const Benefits = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="benefits" className="min-h-screen flex flex-col justify-center items-center text-gray-900 scroll-mt-20"
    style={{
      backgroundColor: "rgba(192, 238, 248, 0.3)",
    }}
    >
      <h2 className="text-4xl font-bold mb-7 text-center text-[#FF0347]">Beneficios de Nuestros Servicios</h2>
      <div className="w-full max-w-7xl px-7">
        <Slider {...settings}>
          {benefits.map((benefit, index) => (
            <div key={index} className="p-3 sm:p-4">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex flex-col items-center text-center min-h-[360px] sm:min-h-[380px]">
                <img src={benefit.image} alt={benefit.title} className="w-full h-40 sm:h-44 object-cover rounded-lg mb-2 sm:mb-3" />
                <h3 className="text-lg font-semibold text-[#333]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">{benefit.description}</p>
                <p className="mt-2 sm:mt-3 font-medium text-[#F2A81D]">{benefit.impact}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Benefits;