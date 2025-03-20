import React from "react";
import Slider from "react-slick";

const benefits = [
  {
    title: "Promueve el Embellecimiento de Plazas",
    description: "Nuestros equipos tecnológicos aportan un diseño moderno e interactivo a los espacios públicos y comerciales.",
    impact: "🌍 Centros comerciales más atractivos y mayor afluencia.",
    image: "/images/benefit1.jpg",
  },
  {
    title: "Promueve el Turismo Recreacional Sano",
    description: "Nuestros equipos generan puntos de interés dentro de centros comerciales y parques, atrayendo turistas.",
    impact: "🎡 Mayor flujo de turistas y diferenciación en entretenimiento.",
    image: "/images/benefit2.jpg",
  },
  {
    title: "Promueve la Conexión Familiar Padres-Hijos",
    description: "Diseñado para fomentar la interacción entre padres e hijos, creando momentos de juego compartido.",
    impact: "👨‍👩‍👧 Familias más unidas y recuerdos inolvidables.",
    image: "/images/benefit3.jpg",
  },
  {
    title: "Promueve la Recreación Sana para los Niños",
    description: "Nuestros equipos ofrecen diversión segura, promoviendo la actividad física y la creatividad.",
    impact: "🎈 Niños felices en un entorno seguro.",
    image: "/images/benefit4.jpg",
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
    image: "/images/benefit6.jpg",
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
    slidesToShow: 3, // 🔥 Muestra 3 cards
    slidesToScroll: 1,
    centerMode: false, // 🔥 No usa modo centrado
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 🔥 En pantallas medianas, mostrar 2
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 🔥 En móviles, mostrar 1 card a la vez
        },
      },
    ],
  };

  return (
    <div id="benefits" className="min-h-screen flex flex-col justify-center items-center text-gray-900 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-7 text-center text-[#D91A73]">Beneficios de Nuestros Servicios</h2>
      <div className="w-full max-w-7xl px-7">
        <Slider {...settings}>
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center text-center h-[380px]">
                <img src={benefit.image} alt={benefit.title} className="w-full h-44 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-[#333]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">{benefit.description}</p>
                <p className="mt-3 font-medium text-[#3DD1F2]">{benefit.impact}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Benefits;
