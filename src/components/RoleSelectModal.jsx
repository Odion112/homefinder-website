import { useState } from "react";
import { LuBuilding2, LuSearch } from "react-icons/lu";


const ROLES = [
  {
    id: "owner",
    label: "Property Owner",
    description: "I want to list and manage my properties for rent or sale.",
    icon: LuBuilding2,
  },
  {
    id: "seeker",
    label: "Property Seeker",
    description: "I'm looking for a property to rent or buy.",
    icon: LuSearch,
  },
];

export default function RoleSelectModal({ isOpen, onClose }) {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading]   = useState(false);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  async function handleContinue() {
    if (!selected) return;
    setLoading(true);

    // Fake API delay — we'll replace with real PATCH /users/me/role when backend is ready
    localStorage.setItem("userRole", selected);
    await new Promise((r) => setTimeout(r, 600));

    setLoading(false);

    // TODO: we'll replace this alert with navigate() when routing is ready
    alert(`Role saved: ${selected === "owner" ? "Property Owner" : "Property Seeker"}`);
    onClose();
  }

  return (
   
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal card */}
      <div
        className="relative bg-white w-full max-w-[480px] mx-4 rounded-lg px-8 py-10 font-neue shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0E0D0C] leading-tight mb-2">
            How are you using HomeFinder?
          </h2>
          <p className="text-sm text-[#6B6B6B]">
            Choose your role so we can personalise your experience.
          </p>
        </div>

        {/* Role cards */}
        <div className="flex flex-col gap-3 mb-8">
          {ROLES.map(({ id, label, description, icon: Icon }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelected(id)}
                className={`
                  flex items-start gap-4 w-full text-left
                  border rounded-sm px-5 py-4
                  transition-all duration-150 cursor-pointer
                  ${isSelected
                    ? "border-[#FE7C0B] bg-[#FE7C0B]/5"
                    : "border-[#D1D1D1] bg-white hover:border-[#FE7C0B]/50"
                  }
                `}
              >
                {/* Icon box */}
                <div
                  className={`
                    flex-shrink-0 w-10 h-10 rounded-xs flex items-center justify-center mt-0.5
                    transition-colors duration-150
                    ${isSelected ? "bg-[#FE7C0B] text-white" : "bg-[#F5F5F5] text-[#6B6B6B]"}
                  `}
                >
                  <Icon size={18} />
                </div>

                {/* Label + description */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold mb-0.5 transition-colors duration-150 ${isSelected ? "text-[#FE7C0B]" : "text-[#0E0D0C]"}`}>
                    {label}
                  </p>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Radio dot */}
                <div className={`
                  flex-shrink-0 mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-150
                  ${isSelected ? "border-[#FE7C0B]" : "border-[#C6C6C6]"}
                `}>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-[#FE7C0B]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue button */}
        <button
          type="button"
          disabled={!selected || loading}
          onClick={handleContinue}
          className={`
            w-full h-12 rounded-xs text-sm font-neue font-medium
            transition-all duration-150 flex items-center justify-center gap-2
            ${selected && !loading
              ? "bg-[#FE7C0B] text-white hover:bg-[#F57708] active:scale-95 cursor-pointer"
              : "bg-[#C6C6C6] text-white cursor-not-allowed"
            }
          `}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 22 6.477 22 12h-4z" />
              </svg>
              Saving...
            </>
          ) : (
            "Continue"
          )}
        </button>

      </div>
    </div>
  );
}