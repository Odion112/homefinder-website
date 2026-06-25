import { PiMapPinLight } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { LuHouse } from "react-icons/lu";
import { FiCheck } from "react-icons/fi";

// status = "published" | "rented-out"
export default function MyListingCard({
  image,
  title,
  location,
  price,       
  status = "published",
  onMoreClick,
}) {
  return (
    <div
      className="
        w-[420px]
        overflow-hidden
        rounded-[20px]
        bg-white
        shadow-sm
        transition
        hover:shadow-lg
        font-neue
        ring-1
        ring-[#C6C6C6]/25
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[275px] overflow-hidden rounded-t-[20px]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="bg-white px-5 pt-6 pb-6 flex flex-col gap-3">

        {/* TITLE & PRICE */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-[24px] font-light leading-tight text-[#0E0D0C] tracking-tight font-neue">
            {title}
          </h2>
          <h3 className="whitespace-nowrap text-[26px] leading-tight">
            <span className="font-neue font-medium">₦{price}</span>
            <span className="font-neue font-light text-[#0E0D0C]">/yr</span>
          </h3>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-1.5">
          <PiMapPinLight className="text-[14px] text-[#696262] shrink-0" />
          <span className="text-[14px] font-light text-[#696262] font-neue">
            {location}
          </span>
        </div>

        {/* STATUS & MORE BUTTON */}
        <div className="flex items-center justify-between mt-1">
          {status === "published" ? (
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EDFAF3] text-[#27AE60]">
              <FiCheck className="text-[13px]" strokeWidth={2.5} />
              <span className="text-[13px] font-neue font-light">Published</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EEF0FF] text-[#5B67CA]">
              <LuHouse className="text-[13px]" strokeWidth={1.8} />
              <span className="text-[13px] font-neue font-light">Rented out</span>
            </div>
          )}

          {/* MORE BUTTON */}
          <button
            onClick={onMoreClick}
            className="
              flex items-center justify-center
              w-8 h-8 rounded-full
              text-[#696262]
              hover:bg-[#F5F5F5]
              transition
            "
            aria-label="More options"
          >
            <BsThreeDots className="text-[18px]" />
          </button>
        </div>

      </div>
    </div>
  );
}

// HOW TO USE
//
// import MyListingCard from "./MyListingCard";
//
// <MyListingCard
//   image={PropertyImage}
//   title="4 Bedroom Duplex"
//   location="Lekki Phase 1, Lagos"
//   price="7.5M"
//   status="published"
//   onMoreClick={() => setDropdownOpen(true)}
// />
//
// <MyListingCard
//   image={PropertyImage2}
//   title="4 Bedroom Bungalow"
//   location="Lekki Phase 2, Lagos"
//   price="7.5M"
//   status="rented-out"
//   onMoreClick={() => setDropdownOpen(true)}
// />