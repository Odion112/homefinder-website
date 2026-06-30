function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="flex items-start gap-5 font-neue">

      {/* Icon */}
      <div className="w-[64px] h-[64px] rounded-full bg-[#FF8303] flex items-center justify-center shrink-0">
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Text */}
      <div>

        <h3 className="text-[24px] font-neue text-[#0E0D0C] leading-[32px]">
          {title}
        </h3>

        <p className="mt-2 text-[16px] leading-[26px] text-[#696262] max-w-[430px]">
          {description}
        </p>

      </div>
    </div>
  );
}

export default FeatureCard;