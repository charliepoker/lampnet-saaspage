import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar/Navbar";
import FoodX from "./Pages/FoodX/FoodX";
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import { motion } from "framer-motion/dist/framer-motion";




function App() {
  return (
    <motion.div className="App" initial="hidden" animate="show">
      <ScrollToTop smooth color="#e01b0d" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<FoodX />} />
      </Routes>
      <Footer />
    </motion.div>
  );
}

export default App;
