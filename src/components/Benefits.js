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
    image: parejas,
  },
];

const Benefits = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
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
    appendDots: dots => (
      <div style={{ marginTop: "2rem", minHeight: "50px" }}> {/* Aumentamos la altura del contenedor */}
        <ul style={{ margin: "8px 0", display: "flex", justifyContent: "center" }}> 
          {dots} 
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 mx-1 bg-gray-300 rounded-full transition-all hover:bg-[#FF0347]" />
    ),
  };

  // bg-gray-500 text-white text-gray-900 py-11 scroll-mt-20 min-h-screen justify-center items-cente

  return (
<section id="benefits" className="flex flex-col scroll-mt-10 justify-center py-8 min-h-[100vh] items-center text-gray-900">
  <h2 className="text-3xl font-extrabold text-center text-[#3DD1F2]">
    Beneficios de Nuestros Servicios
  </h2>

  <div className="w-full max-w-7xl px-4 md:px-6 relative">
    <Slider
      {...settings}
      className="relative"
      appendDots={(dots) => (
        <div className="slick-dots mt-4">
          <ul style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            {dots}
          </ul>
        </div>
      )}
    >
      {benefits.map((benefit, index) => (
        <div key={index} className="p-2">
          <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-h-[380px] md:min-h-[420px] lg:min-h-[460px]">
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-40 md:h-44 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold text-[#333]">{benefit.title}</h3>
            <p className="mt-2 text-sm text-gray-600 flex-1 leading-tight">{benefit.description}</p>
            <p className="mt-3 font-medium text-[#F2A81D]">{benefit.impact}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>


  );
};

export default Benefits;
