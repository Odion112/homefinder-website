import { useState } from "react";

export default function InputField({
  label,
  placeholder = "Enter value",
  type = "text",
  value,
  onChange,
  error = "",
  disabled = false,
  className = "",
  required = true
}) {
  const [isFocused, setIsFocused] = useState(false);

  const isError = Boolean(error);
  const isActive = isFocused && !isError;

  const borderClass = isError
    ? "border-[#EA0000] bg-red-[#EA0000]/8"
    : isActive
      ? "border-[#FE7C0B]"
      : "border-gray-300 bg-white";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-sm font-roman font-neue text-[#0E0D0C]">{label}</label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`
          w-full rounded-xs border px-4 py-3.5
          text-sm text-[#0E0D0C] placeholder-gray-[#A5A1A1]
          outline-none transition-all duration-150
          disabled:opacity-50 disabled:cursor-not-allowed
          ${borderClass}
        `}
      />

      {isError && (
        <p className="text-xs text-[#EA0000] mt-0.5">{error}</p>
      )}
    </div>
  );
}