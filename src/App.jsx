import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>

<<<<<<< HEAD
    <Navbar />
=======
>>>>>>> origin/main

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;