export default function Input({
  label = "Email",
  placeholder = "Enter your email",
  value = "",
  error = "",
  onChange = () => {},
}) {
  return (
    <div className="w-[532px]">
      <label
        className="
          block
          mb-5
          font-neue
          text-[18px]
          text-[var(--color-text-primary)]
        "
      >
        {label}
      </label>

      <input
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full
          h-[58px]
          rounded-[4px]
          border
          pl-[26px]
          pr-[10px]
          py-[10px]
          font-neue
          text-[18px]
          text-[var(--color-text-primary)]
          placeholder:text-[var(--color-text-tertiary)]
          shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
          outline-none
          ${
            error
              ? "border-[var(--color-error)] bg-[#EA00000A]"
              : "border-[var(--color-disabled)] focus:border-[#FE7C0B] focus:ring-0"
          }
        `}
      />
      {error && (
        <p className="mt-3 text-[14px] text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
}