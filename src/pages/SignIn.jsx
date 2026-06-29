import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import Logo from "../assets/images/logo-white.svg";
import HeroImage from "../assets/images/hero-image.svg";

// Button Component 
const Button = forwardRef(function Button(
  {
    variant = "filled",
    iconOnly = false,
    iconLeft,
    iconRight,
    disabled = false,
    loading = false,
    className = "",
    children,
    ...rest
  },
  ref
) {
  const base = `
    inline-flex items-center justify-center gap-2
    h-10 w-40 px-5 rounded-xs text-sm font-rethink font-normal
    transition-all duration-150 cursor-pointer select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
  `;

  const filled = `
    bg-[#FE7C0B] text-white
    hover:bg-[#F57708]
    active:scale-95
  `;

  const outline = `
    bg-transparent text-[#0E0D0C] border border-[#C6C6C6]
    hover:bg-[#FE7C0B] hover:text-white
    active:scale-95
  `;

  const variantStyles = { filled, outline };

  const disabledStyles =
    disabled || loading
      ? "!bg-[#C6C6C6] !text-white !border-[#C6C6C6] cursor-not-allowed pointer-events-none"
      : "";

  const iconOnlyStyles = iconOnly ? "w-10 h-10 px-0" : "";
  const finalStyles = `${base} ${variantStyles[variant]} ${iconOnlyStyles} ${disabledStyles} ${className}`;

  return (
    <button
      ref={ref}
      className={finalStyles}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 22 6.477 22 12h-4z" />
        </svg>
      )}
      {!loading && iconLeft && <span>{iconLeft}</span>}
      {!iconOnly && <span>{children}</span>}
      {iconOnly && !loading && <span>{children}</span>}
      {!loading && !iconOnly && iconRight && <span>{iconRight}</span>}
    </button>
  );
});

//InputField Component 
function InputField({
  label,
  placeholder = "Enter value",
  type = "text",
  value,
  onChange,
  error = "",
  disabled = false,
  className = "",
  rightIcon,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const isError = Boolean(error);
  const isActive = isFocused && !isError;

  const borderClass = isError
    ? "border-[#EA0000] bg-[#EA0000]/5"
    : isActive
    ? "border-[#FE7C0B]"
    : "border-gray-300 bg-white";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-sm font-neue text-[#0E0D0C]">{label}</label>
      )}

      <div className="relative flex items-center">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full rounded-xs border px-4 py-3.5
            text-sm font-neue text-[#0E0D0C] placeholder-[#A5A1A1]
            outline-none transition-all duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            ${rightIcon ? "pr-11" : ""}
            ${borderClass}
          `}
        />
        {rightIcon && (
          <div className="absolute right-4 flex items-center justify-center text-[#A5A1A1]">
            {rightIcon}
          </div>
        )}
      </div>

      {isError && (
        <p className="text-xs text-[#EA0000] mt-0.5">{error}</p>
      )}
    </div>
  );
}


export default function SignInPage() {
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [errorType, setErrorType] = useState(null); // null | "wrong-password" | "no-account"

  const isFilled  = email.trim() !== "" && password.trim() !== "";
  const isDefault = !isFilled;

  const emailError    = errorType === "no-account"     ? "No account found with this email." : "";
  const passwordError = errorType === "wrong-password" ? "Incorrect email or password. Please try again." : "";
  const globalError   = errorType === "wrong-password" ? "Incorrect email or password. Please try again."
 : errorType === "no-account"     ? "No account found with this email."
  : "";

  function handleLogin() {
    if (!errorType) setErrorType("wrong-password");
    else if (errorType === "wrong-password") setErrorType("no-account");
    else setErrorType(null);
  }

  return (
    <div className="flex min-h-screen w-full font-neue">

      {/* LEFT SIDE*/}
      <div className="relative w-[52%] flex-shrink-0">

        {/* Hero image */}
        <img
          src={HeroImage}
          alt="Modern home exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Logo*/}
        <div className="absolute top-8 left-10 z-10">
          <img
            src={Logo}
            alt="HomeFinder"
            className="h-4 object-contain"
          />
        </div>

        {/* Tagline */}
        <div className="absolute bottom-12 left-10 right-10 z-10">
          <h2 className="text-white font-neue font-medium text-3xl leading-tight mb-3">
            Simplify Your House-hunting Process
          </h2>
          <p className="text-white/75 text-base font-neue leading-relaxed">
            Making your house-hunting journey easy in just few clicks - ast, easy, reliable.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE*/}
      <div className="flex-1 flex items-center justify-center bg-white px-16">
        <div className="w-full max-w-[480px]">

          <h1 className="text-[32px] font-neue font-medium text-[#0E0D0C] leading-tight mb-2">
            Welcome to HomeFinder
          </h1>
          <p className="text-base text-[#6B6B6B] mb-10">
            Login to your account.
          </p>

          <div className="flex flex-col gap-6">

            {/* Email field */}
            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />

            {/* Password field  */}
            <InputField
              label="Password"
              placeholder="Enter your password"
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="text-[#A5A1A1] hover:text-[#555] transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPwd
                    ? <PiEyeLight size={20} />
                    : <PiEyeSlashLight size={20} />
                  }
                </button>
              }
            />

            {/* Login button */}
            <Button
              variant="filled"
              disabled={isDefault}
              onClick={handleLogin}
              className="!w-full !h-12 mt-1"
            >
              Login
            </Button>
          </div>

       
          <p className="text-center text-sm text-[#6B6B6B] mt-6">
            Don't have any account?{" "}
            <Link to="/sign-up" className="text-[#0E0D0C] font-semibold hover:text-[#FE7C0B] transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}