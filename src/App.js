import React from "react";
import Navbar from "./components/Navbar/Navbar"
import FoodX from "./Pages/FoodX/FoodX";
import Footer from "./components/Footer/Footer"

function App() {
  return <div className="App">
    <Navbar/>
    <FoodX/>
    <Footer/>
  </div>;
}

export default App;
