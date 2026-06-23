import {
  FiMapPin,
  FiBed,
  FiBath,
  FiZap,
} from "react-icons/fi";

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
        w-full
        max-w-[620px]
        overflow-hidden
        rounded-[28px]
        bg-white
        shadow-sm
        transition
        hover:shadow-lg
      "
    >
      {/* PROPERTY IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[360px] w-full object-cover"
        />

        {/* VERIFIED BADGE */}
        {verified && (
          <div className="absolute left-6 top-6">
            <VerifiedBadge />
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="bg-[#F7F7F7] p-8">
        {/* TITLE + PRICE */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              className="
                text-[48px]
                font-light
                leading-none
                text-black
              "
            >
              {title}
            </h2>

            {/* LOCATION */}
            <div className="mt-6 flex items-center gap-3">
              <FiMapPin
                className="text-[34px] text-[#7A7A7A]"
              />

              <span
                className="
                  text-[26px]
                  font-normal
                  text-[#7A7A7A]
                "
              >
                {location}
              </span>
            </div>
          </div>

          {/* PRICE */}
          <h3
            className="
              whitespace-nowrap
              text-[56px]
              font-bold
              text-black
            "
          >
            {price}
          </h3>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-[1px] bg-[#E7E7E7]" />

        {/* FEATURES */}
        <div className="flex flex-wrap gap-10">
          {/* BEDS */}
          <div className="flex items-center gap-3">
            <FiBed
              className="text-[34px] text-[#767676]"
            />

            <span
              className="
                text-[26px]
                text-[#767676]
              "
            >
              {beds} Beds
            </span>
          </div>

          {/* BATHS */}
          <div className="flex items-center gap-3">
            <FiBath
              className="text-[34px] text-[#767676]"
            />

            <span
              className="
                text-[26px]
                text-[#767676]
              "
            >
              {baths} Baths
            </span>
          </div>

          {/* POWER */}
          <div className="flex items-center gap-3">
            <FiZap
              className="text-[34px] text-[#767676]"
            />

            <span
              className="
                text-[26px]
                text-[#767676]
              "
            >
              {power}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}