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
import Dropdown from "./components/Dropdown";
import LandlordCard from "./components/LandlordCard";
import { IoFilterOutline } from "react-icons/io5";
import Button from "./components/Button"
import SearchBar from "./components/SearchBar"

function App() {
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (q) => {
    console.log("searching:", q);
  };

  return (
    <>
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search by area, e.g. Lekki, Yaba..."
        onSearch={handleSearch}
        className="!w-100"
      />

      <Button
        variant="outline"
        iconLeft={<IoFilterOutline size={16} />}
        className="!w-auto !px-4 shrink-0"
      >
        Filter
      </Button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;