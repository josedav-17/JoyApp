import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F2A81D] text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Joy Riders SAS. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;