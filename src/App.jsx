import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setEmail(value);
    setError(value.includes("@") ? "" : "Please enter a valid email.");
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] p-10">
      <Navbar />

      <div className="mt-10 max-w-[600px] space-y-6">
        <Input
          label="Email"
          value={email}
          error={error}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </div>
  );
}

export default App;
