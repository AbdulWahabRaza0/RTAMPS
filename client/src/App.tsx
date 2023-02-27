import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Virus from "./Pages/Virus";
import Bacteria from "./Pages/Bacteria";
import Fungi from "./Pages/Fungi";
import Animal from "./Pages/Animal";
import Plants from "./Pages/Plants";
import Protist from "./Pages/Protist";
import LinkOpen from "./Pages/LinkOpen";
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
        <Route path="/fungi" element={<Fungi />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/protist" element={<Protist />} />

        <Route path="/bacteria/*" element={<LinkOpen />} />
        <Route path="/virus/*" element={<LinkOpen />} />
        <Route path="/fungi/*" element={<LinkOpen />} />
        <Route path="/animal/*" element={<LinkOpen />} />
        <Route path="/plants/*" element={<LinkOpen />} />
        <Route path="/protist/*" element={<LinkOpen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
