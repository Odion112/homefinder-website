import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import ProfileModal from "./components/ProfileModal";

function App() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;