import React from "react";

const AmenityTag = ({ icon: Icon, label }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#C6C6C6]">
      {Icon && (
        <Icon
          size={16}
          className="text-[#0E0D0C] shrink-0"
        />
      )}
      <span className="text-sm font-roman font-neue text-[#0E0D0C] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default AmenityTag;


// ─── Example usage (remove when integrating) ────────────────────────────────
//
// import { PiBolt }        from "react-icons/pi";
// import { PiWifi }        from "react-icons/pi";
// import { PiSwimmingPool} from "react-icons/pi";
// import { PiSecurityCamera } from "react-icons/pi";
//
// <AmenityTag icon={PiBolt}           label="24/7 Power Supply" />
// <AmenityTag icon={PiWifi}           label="Free Wi-Fi"         />
// <AmenityTag icon={PiSwimmingPool}   label="Swimming Pool"      />
// <AmenityTag icon={PiSecurityCamera} label="24/7 Security"      />