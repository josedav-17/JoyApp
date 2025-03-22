import React, { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaTools, FaGift, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubheader, setShowSubheader] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const messages = [
    "📞 Contáctanos al +1234567890",
    "💼 Ventas al por mayor y al detal",
    "⚡ Servicio rápido y confiable"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowSubheader(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimate(true);
      }, 1000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [messages.length]);

  const handleLinkClick = () => {
    setShowSubheader(false);
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-[#178ACD] shadow-md">
      {/* Subheader con mensajes animados */}
      {showSubheader && (
        <div className="bg-[#F2A81D] text-white text-lg font-bold text-center w-full py-3 shadow-md">
          <p className={`transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            {messages[messageIndex]}
          </p>
        </div>
      )}

      {/* Header principal */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 pt-2 pb-0 relative">


        
        {/* Logo y slogan en PC */}
        <div className="md:flex md:items-center md:gap-4">

          {/* Logo centrado en móviles, alineado a la izquierda en PC */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img src={logo} alt="Logo" className="h-13 w-auto max-w-[7.75rem]" />
          </div>
          
          {/* Slogan alineado a la derecha en PC */}
          <div className="hidden md:block text-lg font-bold italic text-white">
            ✨ Tecnología que despierta alegrías ✨
          </div>
        </div>

        {/* Botón de menú alineado a la derecha en la misma línea en móviles */}
        <button onClick={() => setIsOpen(!isOpen)} className="absolute right-6 top-4 md:hidden text-white text-2xl p-2">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Slogan en móviles (bajo el logo) */}
        <div className="md:hidden text-lg font-bold italic text-white text-center mt-2">
          ✨ Tecnología que despierta alegrías ✨
        </div>

        {/* Menú en escritorio */}
        <nav className="hidden md:flex space-x-4">
          {[
            { href: "", icon: <FaHome />, text: "Inicio" },
            { href: "#services", icon: <FaTools />, text: "Servicios" },
            { href: "#benefits", icon: <FaGift />, text: "Beneficios" },
            { href: "#about", icon: <FaInfoCircle />, text: "Sobre Nosotros" },
            { href: "#contact", icon: <FaEnvelope />, text: "Contacto" }
          ].map(({ href, icon, text }) => (
            <a key={href} href={href} onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#178ACD] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
              {icon} {text}
            </a>
          ))}
        </nav>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden bg-[#3DD1F2] shadow-lg p-4 w-full text-center">
          {[
            { href: "", icon: <FaHome />, text: "Inicio" },
            { href: "#about", icon: <FaInfoCircle />, text: "Sobre Nosotros" },
            { href: "#services", icon: <FaTools />, text: "Servicios" },
            { href: "#benefits", icon: <FaGift />, text: "Beneficios" },
            { href: "#contact", icon: <FaEnvelope />, text: "Contacto" }
          ].map(({ href, icon, text }) => (
            <a key={href} href={href} onClick={handleLinkClick} className="block py-2 mb-2 text-white bg-[#178ACD] rounded-full px-4 flex items-center justify-center gap-2">
              {icon} {text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
