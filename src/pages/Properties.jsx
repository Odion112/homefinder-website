import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import PropertyCard from "../components/PropertyCard";

import { LuSlidersHorizontal } from "react-icons/lu";

// property images
import property1 from "../assets/images/property1.svg";
import property2 from "../assets/images/property2.svg";
import property3 from "../assets/images/property3.svg";
import property4 from "../assets/images/property4.svg";
import property5 from "../assets/images/property5.svg";
import property6 from "../assets/images/property6.svg";

export default function Properties() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const properties = [
    {
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
          <div className="flex items-center gap-4">

            <SearchBar
              value={query}
              onChange={setQuery}
              className="w-[300px] h-[40px]"
            />

            <Button
              variant="outline"
              className="w-[110px] h-[40px]"
              iconLeft={<LuSlidersHorizontal size={18} />}
            >
              Filter
            </Button>

            <Dropdown
              options={[
                "Newest",
                "Oldest",
                "Price: High to Low",
                "Price: Low to High",
              ]}
              value={sortBy}
              onChange={setSortBy}
              className="w-[150px]"
            />
          </div>
        </div>

        {/* GRID */}
        <div
          className="
            mt-[58px]
            grid
            grid-cols-3
            gap-x-[30px]
            gap-y-[36px]
            pb-[140px]
          "
        >
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              beds={property.beds}
              baths={property.baths}
              power={property.power}
              verified
            />
          ))}
        </div>

      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}