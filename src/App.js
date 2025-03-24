import React, { useEffect } from "react";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ReactGA from "react-ga4";
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-HC4N5337BV");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

