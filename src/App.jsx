import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import Info from "./components/info/Info";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Info />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
