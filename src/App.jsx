import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";

function App() {
  const [status, setStatus] = useState("");
  

  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;