import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyCard from "./components/PropertyCard";
import PropertyImage from "./assets/images/property-image.svg";
import HomePagePropertyCard from "./components/HomePagePropertyCard";


function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black">
  <HomePagePropertyCard
    image={PropertyImage}
    title="3 Bedroom Flat"
    location="Lekki Phase 1, Lagos"
    priceAmount="₦4.5M"
    pricePeriod="/yr"
    beds={3}
    baths={3}
    power="24/7 Power"
    verified={true}
  />
</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;