import React from "react";

const services = [
  {
    title: "Centros Comerciales",
    description:
      "Transforma tu espacio en un punto de referencia con tecnología innovadora.",
    image: "https://source.unsplash.com/500x300/?mall,shopping",
    benefits: [
      "Mayor afluencia de visitantes.",
      "Experiencia interactiva y moderna.",
      "Aumento en el tiempo de permanencia y consumo.",
    ],
    buttonText: "Descubre más",
  },
  {
    title: "Para Emprendedores",
    description:
      "Convierte la tecnología en tu fuente de ingresos con un negocio rentable.",
    image: "https://source.unsplash.com/500x300/?business,entrepreneur",
    benefits: [
      "Oportunidad de negocio con tecnología innovadora.",
      "Soporte y asesoría garantizada.",
      "Expansión en el sector de entretenimiento.",
    ],
    buttonText: "Emprende ahora",
  },
  {
    title: "Eventos Especiales",
    description:
      "Dale un toque único a tu evento con soluciones tecnológicas interactivas.",
    image: "https://source.unsplash.com/500x300/?event,celebration",
    benefits: [
      "Impacto visual y experiencia única.",
      "Soluciones adaptadas a cualquier evento.",
      "Montaje y asistencia técnica incluida.",
    ],
    buttonText: "Hazlo inolvidable",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-[#A3BF3B] text-white py-10 scroll-mt-20 min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Fondo con SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#8EA92E"
            fillOpacity="1"
            d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,149.3C840,128,960,160,1080,192C1200,224,1320,256,1380,272L1440,288V0H0Z"
          ></path>
        </svg>
      </div>

      {/* Contenido principal */}
      <h2 className="text-4xl font-bold mb-6 text-center text-[#F2F2F2] z-10">Nuestros Servicios</h2>
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white text-gray-900 rounded-lg shadow-md overflow-hidden h-[380px] group transform transition duration-300 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#D91A73]">{service.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{service.description}</p>
                <ul className="mt-3 space-y-1 text-xs">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-[#3DD1F2]">
                      ✅ <span className="ml-2 text-gray-900">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-3 bg-[#F2A81D] text-white font-bold py-2 text-xs rounded-md transition duration-300 hover:bg-[#D91A73]">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
