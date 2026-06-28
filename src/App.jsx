import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import ListingProgressBar from "./components/ListingProgressBar";

function App() {
  
  return (
    <>
<ListingProgressBar currentStep={1} totalSteps={2} label="Property Details" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;