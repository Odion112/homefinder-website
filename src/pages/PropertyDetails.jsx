import { useState } from "react";
import { useParams } from "react-router-dom";


import { PiArrowLeft, PiShareNetwork, PiCheckCircle } from "react-icons/pi";
import { HiOutlineBolt } from "react-icons/hi2";
import { CiWifiOn } from "react-icons/ci";
import { MdOutlineKitchen } from "react-icons/md";
import {
  PiCar, PiShieldCheck, PiBarbell, PiDrop,
  PiArmchair, PiThermometer, PiCamera, PiSquaresFour,
} from "react-icons/pi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AmenityTag from "../components/AmenityTag";
import LandlordCard from "../components/LandlordCard"

const ALL_AMENITIES = [
  { icon: HiOutlineBolt,    label: "24/7 Power Supply" },
  { icon: PiCar,            label: "Parking Space" },
  { icon: CiWifiOn,         label: "Internet Availability" },
  { icon: PiShieldCheck,    label: "Security" },
  { icon: PiCar,            label: "Good Road Access" },
  { icon: PiBarbell,        label: "Gym" },
  { icon: PiDrop,           label: "Running water" },
  { icon: MdOutlineKitchen, label: "Fitted Kitchen" },
  { icon: PiArmchair,       label: "Built-in Wardrobes" },
  { icon: PiThermometer,    label: "Water Heater" },
  { icon: PiCamera,         label: "CCTV Surveillance" },
  { icon: PiSquaresFour,    label: "POP Ceiling" },
];

const IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6d2b8a68?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
];

const landlordData = {
  name: "Jamiu Peters",
  verified: true,
  avatarUrl: null,
  propertiesListed: 2,
  memberSince: 2026,
  phone: "+234 701 111 2222",
  whatsapp: "+234 701 111 2222",
};

export default function PropertyDetails() {
    // const { id } = useParams();
  const [showAllPhotos, setShowAllPhotos]       = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showFullDesc, setShowFullDesc]         = useState(false);
  const [showFullVerified, setShowFullVerified] = useState(false);
  const [linkCopied, setLinkCopied]             = useState(false);

  function handleShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    });
  }

  const visibleAmenities = showAllAmenities
    ? ALL_AMENITIES
    : ALL_AMENITIES.slice(0, 6);

  return (
    
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Photo gallery ── */}
      <div className="w-full bg-gray-100">
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "55% 45%", height: "567px" }}
        >
          <div className="overflow-hidden h-full">
            <img
              src={IMAGES[0]}
              alt="Property exterior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-1 h-full">
            <div className="overflow-hidden">
              <img
                src={IMAGES[1]}
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src={IMAGES[2]}
                alt="Interior 2"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShowAllPhotos(!showAllPhotos)}
                className="absolute inset-0 bg-black/50 text-white flex items-center justify-center font-neue font-medium text-[15px] hover:bg-black/60 transition-colors"
              >
                {showAllPhotos ? "Show fewer" : "View all photos"}
              </button>
            </div>
          </div>
        </div>

        {showAllPhotos && (
          <div className="grid grid-cols-4 gap-1 mt-1">
            {IMAGES.slice(3).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`extra-${i}`}
                className="w-full object-cover"
                style={{ height: "200px" }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Page body ── */}
      <div className="flex-1 px-[60px] pt-10 pb-20">

        {/* Breadcrumb — full width row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-[15px] font-rethink text-[#696262]">
            <PiArrowLeft size={16} />
            <span>Properties</span>
            <span>/</span>
            <span className="text-[#0E0D0C] font-medium">3 Bedroom Flat</span>
          </div>
          <span className="text-[14px] font-rethink text-[#696262]">
            Posted 2 days ago
          </span>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex items-start" style={{ gap: "70px" }}>

          {/* ── LEFT: all content ── */}
          <div className="flex-1 min-w-0">

            {/* Title row: h1 on left, Share button on right */}
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-[36px] font-neue font-medium text-[#0E0D0C] leading-tight">
                3 Bedroom Flat
              </h1>
              {/* Share button — sits level with the title, right edge of left column */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 border border-[#C6C6C6] text-[#0E0D0C] font-rethink text-[14px] px-4 py-2 hover:bg-gray-50 transition-colors shrink-0 mt-2"
                style={{ borderRadius: "4px" }}
              >
                {linkCopied ? (
                  <>
                    <PiCheckCircle size={16} className="text-green-500" />
                    <span className="text-green-600">Link copied!</span>
                  </>
                ) : (
                  <>
                    <PiShareNetwork size={16} />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>

            {/* Location + specs */}
            <p className="text-[15px] font-neue font-roman text-[#696262] mb-2">
              📍 Lekki Phase 1, Lagos
            </p>
            <div className="flex items-center gap-6 text-[15px] font-neue font-roman text-[#696262] mb-10">
              <span>🛏 3 Bedrooms</span>
              <span>🚿 4 bathrooms</span>
            </div>

            {/* Description */}
            <section className="mb-10">
              <h2 className="text-[18px] font-neue font-medium text-[#0E0D0C] mb-3">
                Description
              </h2>
              <p className="text-[15px] font-neue font-roman text-[#3D3A3A] leading-[1.75]">
                This spacious 3-bedroom apartment is located in the heart of Lekki Phase 1.
                The property features modern interiors, ample parking space, reliable power
                supply, and 24-hour security. It is situated in a secure and accessible
                neighborhood close to schools, supermarkets, hospitals, and major roads.
                {showFullDesc && (
                  <>
                    {" "}The apartment boasts premium finishes throughout, with tiled floors,
                    fitted kitchen cabinets, and built-in wardrobes in all rooms. The compound
                    has 24/7 security personnel and CCTV surveillance for your peace of mind.
                  </>
                )}
              </p>
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="flex items-center gap-1 text-[14px] font-neue font-medium text-[#0E0D0C] mt-3 hover:text-[#FE7C0B] transition-colors"
              >
                {showFullDesc ? "Show less ↑" : "Read more ↓"}
              </button>
            </section>

            <hr className="border-[#E8E8E8] mb-10" />

            {/* Amenities */}
            <section className="mb-10">
              <h2 className="text-[18px] font-neue font-medium text-[#0E0D0C] mb-4">
                Amenities
              </h2>
              <div className="flex flex-wrap gap-3">
                {visibleAmenities.map(({ icon, label }) => (
                  <AmenityTag key={label} icon={icon} label={label} />
                ))}
              </div>
              <button
                onClick={() => setShowAllAmenities(!showAllAmenities)}
                className="flex items-center gap-1 text-[14px] font-neue font-medium text-[#0E0D0C] mt-4 hover:text-[#FE7C0B] transition-colors"
              >
                {showAllAmenities
                  ? "Show less ↑"
                  : `Show all (${ALL_AMENITIES.length}) ↓`}
              </button>
            </section>

            <hr className="border-[#E8E8E8] mb-10" />

            {/* We verified this property */}
            <section>
              <h2 className="text-[18px] font-neue font-medium text-[#0E0D0C] mb-3">
                We verified this property so you don't have to
              </h2>
              <p className="text-[15px] font-neue font-roman text-[#3D3A3A] leading-[1.75]">
                Every verified landlord on Home Finder goes through an identity verification
                process to help improve trust across the platform. This helps property seekers
                identify more trustworthy listings and make housing decisions with greater
                confidence before reaching out or scheduling inspections.
                {showFullVerified && (
                  <>
                    <br /><br />
                    And because Home Finder connects users directly to landlords, we do not
                    allow inspection fees on the platform. You should never pay to inspect a
                    property listed through Home Finder.
                    <br /><br />
                    If anyone requests an inspection fee while claiming to represent a listing
                    on our platform, please treat it as suspicious and report the listing
                    immediately.
                  </>
                )}
              </p>
              <button
                onClick={() => setShowFullVerified(!showFullVerified)}
                className="flex items-center gap-1 text-[14px] font-neue font-medium text-[#0E0D0C] mt-3 hover:text-[#FE7C0B] transition-colors"
              >
                {showFullVerified ? "Show less ↑" : "Read more ↓"}
              </button>
            </section>

          </div>

          {/* ── RIGHT: LandlordCard only — sticky ── */}
          <div className="shrink-0 sticky top-[118px]">
            <LandlordCard landlord={landlordData} isGuest={false} />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}