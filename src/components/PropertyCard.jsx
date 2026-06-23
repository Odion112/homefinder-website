import { PiMapPinLight } from "react-icons/pi";
import { GoZap } from "react-icons/go";
import { PiBathtub } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import VerifiedBadge from "./VerifiedBadge";

export default function PropertyCard({
  image,
  title,
  location,
  price,
  beds,
  baths,
  power,
  verified = true,
}) {
  return (
    <div
      className="
        w-[420px]
        h-[446px]
        overflow-hidden
        rounded-[20px]
        bg-white
        shadow-sm
        transition
        hover:shadow-lg
        font-neue
          ring-1
    ring-[#C6C6C6]/25"
    >
      {/* PROPERTY IMAGE */}
      <div className="relative w-full h-[275px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* VERIFIED BADGE */}
        {verified && (
          <div className="absolute left-4 top-4 h-10 w-10">
            <VerifiedBadge />
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="bg-white px-5 pt-7 pb-6 flex flex-col h-[171px] gap-2">

        {/* TITLE + PRICE */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-light leading-tight text-[#0E0D0C] tracking-tight font-neue">
              {title}
            </h2>
            <div className="flex items-center gap-1.5">
              <PiMapPinLight className="text-[14px] text-[#696262] shrink-0" />
              <span className="text-[14px] font-roman text-[#696262] font-neue">
                {location}
              </span>
             </div>
          </div>

          <h3 className="whitespace-nowrap text-[26px] font-NeueHaasDisplay text-[#0E0D0C] leading-tight">
  <span className="font-bold">₦4.5M</span>
  <span className="font-medium">/yr</span>
</h3>
        </div>

        {/* DIVIDER */}
        <div className="mt-auto mb-4 h-[1px] bg-[#F1F0F0]" />

        {/* FEATURES */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <IoBedOutline className="text-[16px] text-[#696262] shrink-0" />
            <span className="text-[13px] text-[#696262] font-neue">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PiBathtub className="text-[16px] text-[#696262] shrink-0" />
            <span className="text-[13px] text-[#696262] font-neue">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GoZap className="text-[16px] text-[#696262] shrink-0" />
            <span className="text-[13px] text-[#696262] font-neue">{power}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// HOW TO USE 

{/*<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <PropertyCard
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
      </div> */}