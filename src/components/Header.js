import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubheader, setShowSubheader] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const messages = [
    "Contáctanos al +1234567890",
    "Ventas al por mayor y al detal",
    "Servicio rápido y confiable"
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
  }, []);

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
        <div className="w-full flex items-center justify-between md:flex-col">
          {/* Botón de menú en móviles (Izquierda) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white text-xl">
              ☰
            </button>
          </div>

          {/* Logo centrado */}
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* Espacio vacío para mantener alineado el botón */}
          <div className="md:hidden w-8"></div>
        </div>

        {/* Menú en escritorio */}
        <nav className="hidden md:flex space-x-6 mt-2">
          <a href="#home" onClick={handleLinkClick} className="text-white hover:underline">Inicio</a>
          <a href="#about" onClick={handleLinkClick} className="text-white hover:underline">Sobre Nosotros</a>
          <a href="#services" onClick={handleLinkClick} className="text-white hover:underline">Servicios</a>
          <a href="#benefits" onClick={handleLinkClick} className="text-white hover:underline">Beneficios</a>
          <a href="#contact" onClick={handleLinkClick} className="text-white hover:underline">Contacto</a>
        </nav>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden bg-[#3DD1F2] shadow-lg p-4 w-full text-center">
          <a href="#home" onClick={handleLinkClick} className="block py-2 text-white">Inicio</a>
          <a href="#about" onClick={handleLinkClick} className="block py-2 text-white">Sobre Nosotros</a>
          <a href="#services" onClick={handleLinkClick} className="block py-2 text-white">Servicios</a>
          <a href="#benefits" onClick={handleLinkClick} className="block py-2 text-white">Beneficios</a>
          <a href="#contact" onClick={handleLinkClick} className="block py-2 text-white">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;
