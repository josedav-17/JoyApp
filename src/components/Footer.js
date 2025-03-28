import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F2A81D] text-white p-4 text-center">
      <p>Joy Riders SAS &copy; {new Date().getFullYear()}</p>
      <p>Contacto: <a href="mailto:joyriders.col@gmail.com" className="underline">contacto@joyriders.com</a></p>
    </footer>
  );
};

export default Footer;
