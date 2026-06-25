import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Dropdown({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option) {
    onChange(option);
    setOpen(false);
  }

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white hover:border-[#FE7C0B] transition-colors"
      >
        <span className={value ? "text-gray-900" : "text-[#A5A1A1] font-neue text-[14px] font-roman"}>
          {value || placeholder}
        </span>
        <MdKeyboardArrowDown
          size={16}
          className={`text-[#0E0D0C] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && options.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-orange-50 hover:text-orange-600 ${
                value === option
                  ? "bg-orange-50 text-[#FE7C0B]  font-medium font-neue text-[14px]"
                  : "text-[#0E0D0C]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {open && options.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 px-4 py-3 text-sm text-gray-400">
          No options available
        </div>
      )}
    </div>
  );
}




{/* HOW TO USE 
    
      <div className="p-8 max-w-sm">
        <Dropdown
          options={["Newest", "Latests", "Old"]}
          value={status}
          onChange={setStatus}
          placeholder="Select status"
        />
      </div>
    
    
    
    */}