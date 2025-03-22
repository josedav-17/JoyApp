import React, { useRef } from "react";
import { motion } from "framer-motion";
import mallImage from "../assets/centros1.jpg";
import emprende from "../assets/emprendedores1.jpg";
import ventos from "../assets/fechas1.jpg";
import BackgroundSVG from "../assets/wave.svg";

const phoneNumber = "+573014168993";

const services = [
  {
    title: "Centros Comerciales",
    description: "Los centros comerciales de hoy deben ofrecer algo más que compras: deben brindar experiencias memorables. Nuestros equipos tecnológicos crean un ambiente innovador que atrae visitantes, aumenta su tiempo de permanencia y mejora la experiencia del cliente.",
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
    description: "¿Buscas una oportunidad de negocio rentable y con alta demanda? Con JOY para Emprendedores, puedes alquilar nuestros equipos tecnológicos y generar ingresos pasivos en un sector en constante crecimiento. Te brindamos todo el respaldo y asesoría para que conviertas tu pasión en un negocio exitoso.",
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
    description: "Dale un toque único a tu evento con nuestras soluciones tecnológicas interactivas. Ya sea una feria, festival, evento corporativo o lanzamiento de marca, nuestros equipos garantizan un impacto visual inolvidable y una experiencia innovadora para los asistentes.",
    image: ventos,
    benefits: [
      "Impacto visual y experiencia única.",
      "Soluciones adaptadas a cualquier evento.",
      "Montaje y asistencia técnica incluida.",
    ],
    buttonText: "Hazlo inolvidable",
  },
];

const motionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: index * 0.1 },
  }),
};

const Services = () => {
  const sectionRef = useRef(null);

  const handleWhatsApp = (serviceName) => {
    const message = encodeURIComponent(`Quiero más información - ${serviceName}`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="text-white text-gray-900 py-11 scroll-mt-20 min-h-screen justify-center items-center"
      style={{
        backgroundColor: "#F2911B",
        backgroundImage: `url(${BackgroundSVG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título */}
      <div className="w-full flex justify-center mb-6">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Nuestros Servicios
        </h2>
      </div>

      {/* Contenido de los servicios */}
      <div className="container mx-auto flex flex-wrap justify-center gap-6 mt-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md w-[360px] flex flex-col transform transition hover:scale-105 hover:shadow-lg"
            initial="hidden"
            whileInView="visible"
            custom={index}
            variants={motionVariants}
            viewport={{ once: true }}
          >
            {/* Imagen con bordes redondeados y padding */}
            <div className="overflow-hidden p-2">
              <img
                src={service.image}
                alt={`Servicio de ${service.title}`}
                className="w-full h-32 object-cover rounded-xl" // Imagen con bordes redondeados
              />
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm mt-2 text-gray-600">{service.description}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-800">
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
                className="w-[80%] bg-[#178ACD] text-white font-semibold py-2 rounded-lg text-sm transition hover:bg-[#0BB3D9] shadow-md"
              >
                {service.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
