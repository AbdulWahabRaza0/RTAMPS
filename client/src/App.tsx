import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Virus from "./Pages/Virus";
import Archea from "./Pages/Archea";
import Bacteria from "./Pages/Bacteria";
import Fungi from "./Pages/Fungi";
import Animal from "./Pages/Animal";
import Plants from "./Pages/Plants";
import Protist from "./Pages/Protist";
import Protozia from "./Pages/Protozia";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/bacteria" element={<Bacteria />} />
        <Route path="/virus" element={<Virus />} />
        <Route path="/archea" element={<Archea />} />
        <Route path="/fungi" element={<Fungi />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/protist" element={<Protist />} />
        <Route path="/protozia" element={<Protozia />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
