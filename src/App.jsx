import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyCard from "./components/PropertyCard";
import PropertyImage from "./assets/images/property-image.svg";
import HomePagePropertyCard from "./components/HomePagePropertyCard";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";
import MyListingsCard from "./components/MyListingsCard";
import ConfirmDialog from "./components/ConfirmDialog";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <MyListingsCard
            image={PropertyImage}
            title="4 Bedroom Duplex"
            location="Lekki Phase 1, Lagos"
            price="7.5M"
            status="published"
            onMoreClick={() => setDropdownOpen(true)}
          />
        </div>
      </main>

      <ConfirmDialog open={dropdownOpen} onClose={() => setDropdownOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
