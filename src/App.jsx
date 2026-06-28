import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import ProfileModal from "./components/ProfileModal";
import Navbar from "./components/Navbar";

function App() {
 

  return (
    <>
   

      <Navbar />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;