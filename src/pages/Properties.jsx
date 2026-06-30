import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import PropertyCard from "../components/PropertyCard";
import FilterPanel from "../components/FilterPanel";

import { LuSlidersHorizontal } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuPanelLeftClose } from "react-icons/lu";

// property images
import property1 from "../assets/images/property1.svg";
import property2 from "../assets/images/property2.svg";
import property3 from "../assets/images/property3.svg";
import property4 from "../assets/images/property4.svg";
import property5 from "../assets/images/property5.svg";
import property6 from "../assets/images/property6.svg";

export default function Properties() {
 const [query, setQuery] = useState("");
const [open, setOpen] = useState(false);
const [sortBy, setSortBy] = useState("Newest");

const [showFilters, setShowFilters] = useState(false);

const [filters, setFilters] = useState({
  location: "",
  selectedTypes: [],
});

  const properties = [
    {
       id: 1,     
      image: property1,
      title: "3 Bedroom Flat",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
      duration: "/yr",
      beds: 3,
      baths: 3,
      power: "24/7 Power",
    },
    {
      id: 2, 
     image: property2,
      title: "4 Bedroom Duplex",
      location: "Lekki Phase 1, Lagos",
      price: "₦7.5M",
       duration: "/yr",
      beds: 4,
      baths: 5,
      power: "24/7 Power",
    },
    {
       id: 3,
       image: property3,
      title: "3 Bedroom Flat",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
       duration: "/yr",
      beds: 3,
      baths: 3,
      power: "24/7 Power",
    },
    {
       id: 4,
       image: property4,
      title: "Self Contained",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
       duration: "/yr",
      beds: 1,
      baths: 1,
      power: "33 line",
    },
    {
      id: 5,
      image: property5,
      title: "2 Bedroom Bungalow",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
       duration: "/yr",
      beds: 2,
      baths: 3,
      power: "24/7 Power",
    },
    {
      id: 6,
      image: property6,
      title: "4 Bedroom Duplex",
      location: "Lekki Phase 1, Lagos",
      price: "₦7.5M",
       duration: "/yr",
      beds: 4,
      baths: 5,
      power: "24/7 Power",
    },
    {
      id: 7, 
     image: property1,
      title: "2 Bedroom Apt",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
       duration: "/yr",
      beds: 2,
      baths: 3,
      power: "24/7 Power",
    },
    {
      
      id: 8,
      image: property5,
      title: "Student Hostel",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
       duration: "/yr",
      beds: 3,
      baths: 3,
      power: "24/7 Power",
    },
    {
      id: 9, 
     image: property4,
      title: "Self Contained",
      location: "Lekki Phase 1, Lagos",
      price: "₦4.5M",
       duration: "/yr",
      beds: 1,
      baths: 1,
      power: "33 line",
    },
  ];

  const handleApplyFilters = (data) => {
  setFilters(data);
  setShowFilters(true);
};

const clearFilters = () => {
  setFilters({
    location: "",
    selectedTypes: [],
  });

  setShowFilters(false);
};

const filteredProperties = properties.filter((property) => {

  const matchLocation =
    !filters.location ||
    property.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());

  const matchType =
    filters.selectedTypes.length === 0 ||
    filters.selectedTypes.includes("All") ||
    filters.selectedTypes.some((type) =>
      property.title.toLowerCase().includes(type.toLowerCase())
    );

  return matchLocation && matchType;
});

  return (
    <div className="bg-[#FDFDFD] min-h-screen font-neue">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <section className="px-[60px] pt-[44px]">

        {/* HEADER */}
        <div className="flex items-start justify-between">

          {/* LEFT */}
          <div>
            
            <div  className="
                text-[32px]
                leading-none
                font-roman
                font-neue
                text-[#0E0D0C]
              "
            >
              Properties </div>
           

            <p
              className="
                mt-[10px]
                text-[18px]
                text-[#A5A1A1]
                font-rethink
              "
            >
              9 listings
            </p>
          </div>

          {/* RIGHT */}
        <div className="flex items-center gap-4 shrink-0">

            <SearchBar
  value={query}
  onChange={setQuery}
  className="w-[300px] h-[40px] shrink-0"
/>

<Button
  variant="outline"
  className="w-[110px] h-[40px] shrink-0"
  iconLeft={
    showFilters
      ? <LuPanelLeftClose size={18} />
      : <LuSlidersHorizontal size={18} />
  }
  onClick={() => setShowFilters((prev) => !prev)}
>
  Filter
</Button>


{/* SORTBY DROPDOWN */}
<div className="relative w-[145px]">

  <button
    onClick={() => setOpen((prev) => !prev)}
    className="
      w-full
      h-[40px]
      px-4
      border
      border-[#C6C6C6]
      rounded-xs
      bg-white
      flex
      items-center
      justify-between
      text-[14px]
      font-neue
    "
  >
    <span className="truncate">
  Sort by: {sortBy}
</span>

<MdKeyboardArrowDown
  size={18}
  className={`shrink-0 transition-transform duration-200 ${
    open ? "rotate-180" : ""
  }`}
/>
  </button>

  {open && (
    <div
      className="
        absolute
        top-[44px]
        left-0
        w-full
        bg-white
        border
        border-[#C6C6C6]
        rounded-xs
        overflow-hidden
        z-50
      "
    >
      {[
        "Newest",
        "Oldest",
        "Price: High to Low",
        "Price: Low to High",
      ].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSortBy(item);
            setOpen(false);
          }}
          className="
            w-full
            px-4
            py-3
            text-left
            hover:bg-[#F7F7F7]
          "
        >
          {item}
        </button>
      ))}
    </div>
  )}

</div>
          </div>
        </div>

        {/* GRID */}
   <div className="mt-[32px] flex gap-[20px] items-start">

  {/* FILTER PANEL */}
  {showFilters && (
    <div className="shrink-0">
      <FilterPanel onApply={handleApplyFilters} />
    </div>
  )}

  {/* PROPERTIES */}
  <div className="flex-1 min-w-0">

    {(filters.location ||
      filters.selectedTypes.length > 0) && (
      <div className="flex justify-between mb-6">

        <h3 className="text-[22px] font-neue">
          {filteredProperties.length} results
        </h3>

        <button
          onClick={clearFilters}
          className="text-[15px] font-medium hover:text-[#FE7C0B]"
        >
          Clear all filters
        </button>

      </div>
    )}

    <div
      className={`
        grid
        gap-x-[30px]
        gap-y-[36px]
        pb-[140px]
        ${
          showFilters
            ? "grid-cols-2"
            : "grid-cols-3"
        }
      `}
    >
      {(showFilters ? filteredProperties : properties).map((property) => (
        <Link
          key={property.id}
          to={`/properties/${property.id}`}
          className="w-fit"
        >
        <PropertyCard
  className={
    showFilters
      ? "!w-[330px]"
      : ""
  }
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
            duration={property.duration}
            beds={property.beds}
            baths={property.baths}
            power={property.power}
            verified
          />
        </Link>
      ))}
    </div>

  </div>

</div>

      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
