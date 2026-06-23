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

function App() {
  return (
    <>
  <MyListingsCard
  image={PropertyImage} 
  title="4 Bedroom Duplex"
   location="Lekki Phase 1, Lagos"
  price="7.5M"
  status="published"
  onMoreClick={() => setDropdownOpen(true)}
/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;