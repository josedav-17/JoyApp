import React, { useState, useEffect, useCallback } from "react";
import { FaHome, FaInfoCircle, FaTools, FaGift, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const messages = [
  "📞 Contáctanos al +57 3014168993",
  "💼 Ventas al por mayor y al detal",
  "⚡ Servicio rápido y confiable"
];

const menuItems = [
  { href: "", icon: <FaHome />, text: "Inicio" },
  { href: "#services", icon: <FaTools />, text: "Servicios" },
  { href: "#benefits", icon: <FaGift />, text: "Beneficios" },
  { href: "#about", icon: <FaInfoCircle />, text: "Sobre Nosotros" },
  { href: "#contact", icon: <FaEnvelope />, text: "Contacto" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubheader, setShowSubheader] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSubheader(window.scrollY <= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setMessageIndex(0); 
    setAnimate(true);
  
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimate(true);
      }, 1000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    setShowSubheader(false);
    setIsOpen(false);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-[#178ACD] shadow-md">
      {showSubheader && (
        <div className="bg-[#F2A81D] text-white text-lg font-bold text-center w-full py-3 shadow-md">
          <p className={`transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            {messages[messageIndex]}
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between px-6 pt-2 pb-0 relative">
        <div className="md:flex md:items-center md:gap-4">
          <div className="flex-1 flex justify-center md:justify-start">
            <img src={logo} alt="Logo de la empresa Tecnología que despierta alegría" className="h-13 w-auto max-w-[7.75rem]" />
          </div>
          <div className="hidden md:block text-lg font-bold italic text-white">
            ✨ Tecnología que despierta alegría ✨
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="absolute right-6 top-4 md:hidden text-white text-2xl p-2"
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="md:hidden bg-red-600 py-2 px-4 text-lg font-bold italic text-white text-center mt-2 whitespace-nowrap">
          ✨ Tecnología que despierta alegría ✨
        </div>

        <nav className="hidden md:flex space-x-4">
          {menuItems.map(({ href, icon, text }) => (
            <a key={href} href={href} onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 bg-white text-[#178ACD] rounded-full font-semibold shadow-md hover:bg-[#178ACD] hover:text-white transition-all">
              {icon} {text}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0BB3D9] shadow-lg p-4 w-full text-center">
          {menuItems.map(({ href, icon, text }) => (
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