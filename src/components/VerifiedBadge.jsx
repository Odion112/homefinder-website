import VerifiedIcon from "../assets/icons/verified.svg";

export default function VerifiedBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        bg-[#BAFF7B]
        p-3
        rounded-full
        font-NeueHaasDisplay
        font-medium
        text-[#0E0D0C]
        text-[16px]
        w-28
        h-10
      "
    >
      <img
        src={VerifiedIcon}
        alt=""
        className="w-[18px] h-[18px]"
      />

      <span>Verified</span>
    </div>
  );
}