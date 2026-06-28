import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

function App() {
  
  return (
    <>

    <SignUp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;