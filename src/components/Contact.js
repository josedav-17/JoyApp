import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-11 flex flex-col justify-center items-center text-gray-900 scroll-mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Contáctanos</h2>

      <div className="w-full max-w-4xl bg-gray-800 p-6 shadow-lg flex flex-col md:flex-row gap-10 sm:rounded-none md:rounded-lg">
        {/* Formulario */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2 font-semibold text-white" htmlFor="name">Nombre:</label>
            <input
              className="p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />

            <label className="mb-2 font-semibold text-white" htmlFor="email">Correo Electrónico:</label>
            <input
              className="p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo"
              required
            />

            <label className="mb-2 font-semibold text-white" htmlFor="message">Mensaje:</label>
            <textarea
              className="p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tu mensaje"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold px-4 py-3 rounded transition duration-300 hover:bg-yellow-600"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>

            {success === true && (
              <p className="mt-4 text-green-400">✅ Mensaje enviado correctamente</p>
            )}
            {success === false && (
              <p className="mt-4 text-red-400">❌ Hubo un error al enviar el mensaje</p>
            )}
      </form>
        </div>

        {/* Google Maps */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Donde estamos ubicados?</h3>
          <div className="w-full h-64 overflow-hidden shadow-lg sm:rounded-none md:rounded-lg">
            <iframe
              title="Ubicación"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95565151531678!3d-37.81732797975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779ff1d51b1a99!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1619162220901!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Contact;
