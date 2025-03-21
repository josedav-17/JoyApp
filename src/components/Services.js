import React from "react";
import mallImage from "../assets/centros.jpg"; 
import emprende from "../assets/emprendedores.jpg"; 
import ventos from "../assets/eventos.jpg"; 

const phoneNumber = "+573046136840"; 

const services = [
  {
    title: "Centros Comerciales",
    description:
      "Transforma tu espacio en un punto de referencia con tecnología innovadora.",
    image: mallImage,
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
    image: emprende,
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
    image: ventos,
    benefits: [
      "Impacto visual y experiencia única.",
      "Soluciones adaptadas a cualquier evento.",
      "Montaje y asistencia técnica incluida.",
    ],
    buttonText: "Hazlo inolvidable",
  },
];

const Services = () => {

  const handleWhatsApp = (serviceName) => {
    const message = encodeURIComponent(`Quiero más informaciòn - ${serviceName}`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
  };


  return (
    <section id="services" className="bg-gray-700 min-h-screen flex flex-col justify-center items-center text-gray-900 scroll-mt-20"
      style={{
        backgroundColor: "rgba(192, 238, 248, 0.3)",
      }}
    >
      <h2 className="text-3xl font-extrabold text-center text-[#3DD1F2] mb-8">
        Nuestros Servicios
      </h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-[340px] flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm mt-1 text-gray-600">{service.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-800">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    ✅ <span className="ml-2">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 flex justify-center">
               <button
                onClick={() => handleWhatsApp(service.title)}
                className="w-[80%] bg-[#FF0347] text-white font-semibold py-2 rounded-lg text-sm transition duration-300 hover:bg-[#D91A73] shadow-md"
              >
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
