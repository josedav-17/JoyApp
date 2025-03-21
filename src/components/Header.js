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
    <header className="fixed w-full z-50">
      {/* Subheader con mensajes animados */}
      {showSubheader && (
        <div className="bg-[#F2A81D] text-white text-sm text-center w-full py-3">
          <p className={`transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            {messages[messageIndex]}
          </p>
        </div>
      )}

      {/* Header principal alineado en una sola fila */}
      <div className="bg-[#3DD1F2] shadow-md w-full flex items-center justify-between px-6 py-4">
        
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold italic text-white drop-shadow-md ml-3 font-mono">
            Tecnología que despierta alegrías
          </span>
        </div>


        {/* Menú en escritorio con botones */}
        <nav className="hidden md:flex space-x-4">
          {[
            { href: "#home", icon: <FaHome />, text: "Inicio" },
            { href: "#about", icon: <FaInfoCircle />, text: "Sobre Nosotros" },
            { href: "#services", icon: <FaTools />, text: "Servicios" },
            { href: "#benefits", icon: <FaGift />, text: "Beneficios" },
            { href: "#contact", icon: <FaEnvelope />, text: "Contacto" }
          ].map(({ href, icon, text }) => (
            <a key={href} href={href} onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#3DD1F2] rounded-full font-semibold shadow-md hover:bg-[#3DD1F2] hover:text-white transition-all">
              {icon} {text}
            </a>
          ))}
        </nav>

        {/* Botón de menú en móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden bg-[#3DD1F2] shadow-lg p-4 w-full text-center">
          {[
            { href: "#home", icon: <FaHome />, text: "Inicio" },
            { href: "#about", icon: <FaInfoCircle />, text: "Sobre Nosotros" },
            { href: "#services", icon: <FaTools />, text: "Servicios" },
            { href: "#benefits", icon: <FaGift />, text: "Beneficios" },
            { href: "#contact", icon: <FaEnvelope />, text: "Contacto" }
          ].map(({ href, icon, text }) => (
            <a key={href} href={href} onClick={handleLinkClick} className="block py-2 mb-2 text-white bg-[#0077B6] rounded-full px-4 flex items-center justify-center gap-2">
              {icon} {text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
