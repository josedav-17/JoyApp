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
    <header className="fixed w-full z-50 flex flex-col items-center">
      {/* Subheader con animación */}
      {showSubheader && (
        <div className="bg-[#F2A81D] text-white text-sm text-center w-full py-2 overflow-hidden">
          <p className={`transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            {messages[messageIndex]}
          </p>
        </div>
      )}

      {/* Header principal */}
      <div className="bg-[#3DD1F2] shadow-md w-full flex flex-col md:items-center p-4">
        <div className="w-full flex items-center justify-between">
          {/* Botón de menú en móviles */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo centrado */}
          <div className="flex-1 flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-16 max-h-16 w-auto" />
          </div>

          {/* Espacio vacío para mantener alineado el botón en móvil */}
          <div className="md:hidden w-10"></div>
        </div>

        {/* Menú en escritorio con botones */}
        <nav className="hidden md:flex space-x-4 mt-2">
          <a href="#home" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#3DD1F2] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
            <FaHome /> Inicio
          </a>
          <a href="#about" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#3DD1F2] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
            <FaInfoCircle /> Sobre Nosotros
          </a>
          <a href="#services" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#3DD1F2] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
            <FaTools /> Servicios
          </a>
          <a href="#benefits" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#3DD1F2] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
            <FaGift /> Beneficios
          </a>
          <a href="#contact" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#3DD1F2] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
            <FaEnvelope /> Contacto
          </a>
        </nav>
      </div>

      {/* Menú desplegable en móviles con botones */}
      {isOpen && (
        <div className="md:hidden bg-[#3DD1F2] shadow-lg p-4 w-full text-center">
          <a href="#home" onClick={handleLinkClick} className="block py-2 mb-2 text-white bg-[#0077B6] rounded-full px-4 flex items-center justify-center gap-2">
            <FaHome /> Inicio
          </a>
          <a href="#about" onClick={handleLinkClick} className="block py-2 mb-2 text-white bg-[#0077B6] rounded-full px-4 flex items-center justify-center gap-2">
            <FaInfoCircle /> Sobre Nosotros
          </a>
          <a href="#services" onClick={handleLinkClick} className="block py-2 mb-2 text-white bg-[#0077B6] rounded-full px-4 flex items-center justify-center gap-2">
            <FaTools /> Servicios
          </a>
          <a href="#benefits" onClick={handleLinkClick} className="block py-2 mb-2 text-white bg-[#0077B6] rounded-full px-4 flex items-center justify-center gap-2">
            <FaGift /> Beneficios
          </a>
          <a href="#contact" onClick={handleLinkClick} className="block py-2 text-white bg-[#0077B6] rounded-full px-4 flex items-center justify-center gap-2">
            <FaEnvelope /> Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
