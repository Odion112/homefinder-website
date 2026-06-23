import VerifiedIcon from "../assets/icons/verified.svg";

export default function VerifiedBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        justify-center
        gap-1.5
        bg-[#BAFF7B]
        w-[80px]
        h-[26px]
        rounded-full
        font-neue
        font-medium
        text-[#0E0D0C]
        text-[12px]
        leading-none
      "
    >
      <img
        src={VerifiedIcon}
        alt=""
        style={{ width: 16, height: 16, display: "block" }}
      />
      <span style={{ lineHeight: 1 }}>Verified</span>
    </div>
  );
}