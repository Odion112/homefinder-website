import { AiOutlineLogout } from "react-icons/ai";

/**
 * AccountDropdown
 *
 * Props:
 *  - user: { name, email, phone, avatarUrl, initials }
 *  - role: "seeker" | "owner"
 *  - onClose: () => void   — called when user clicks Logout (or any close action)
 */
function AccountDropdown({ user, role, onClose }) {
  function handleLogout() {
    // TODO: wire up real logout logic
    onClose();
  }

  return (
    <div className="absolute right-0 top-[calc(100%+12px)] w-[280px] bg-white rounded-sm shadow-[0px_4px_24px_rgba(0,0,0,0.12)] z-50">

      {/* User info */}
      <div className="flex items-center gap-3 px-5 py-5">

        {/* Avatar */}
        {role === "owner" && user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-[52px] h-[52px] rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-[52px] h-[52px] rounded-full bg-gray-200 flex items-center justify-center text-[16px] font-rethink font-medium text-gray-600 shrink-0">
            {user.initials}
          </div>
        )}

        {/* Name / email / phone */}
        <div className="flex flex-col gap-0.5 min-w-0">
          <p className="text-[15px] font-rethink font-semibold text-[#1A1A1A] leading-tight truncate">
            {user.name}
          </p>
          <p className="text-[13px] font-rethink text-[#6B6B6B] leading-tight truncate">
            {user.email}
          </p>
          {user.phone && (
            <p className="text-[13px] font-rethink text-[#6B6B6B] leading-tight">
              {user.phone}
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E8E8E8] mx-5" />

      {/* Logout */}
      <div className="px-5 py-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-[15px] font-rethink font-medium text-red-500 hover:text-red-600 transition-colors cursor-pointer"
        >
          <AiOutlineLogout size={16} strokeWidth={2} />
          Logout
        </button>
      </div>

    </div>
  );
}

export default AccountDropdown;