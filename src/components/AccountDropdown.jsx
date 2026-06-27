import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

function AccountDropdown({ user, role, onClose }) {
  if (!user) return null;

  function handleProfile() {
    onClose();
    // TODO: navigate to profile page
  }

  function handleLogout() {
    onClose();
  }

  return (
    <div className="absolute right-0 top-[calc(100%+12px)] w-[280px] bg-white rounded-sm shadow-[0px_4px_24px_rgba(0,0,0,0.12)] z-50">

      <div className="flex items-center gap-4 px-5 py-5">
        {role === "owner" ? (
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

        <div className="flex flex-col gap-0.5 min-w-0">
          <p className="text-[15px] font-neue font-medium text-[#0E0D0C] leading-tight truncate">
            {user.name}
          </p>
          <p className="text-[13px] font-neue font-roman text-[#696262] leading-tight truncate">
            {user.email}
          </p>
          {user.phone && (
            <p className="text-[13px] font-neue font-roman text-[#696262] leading-tight">
              {user.phone}
            </p>
          )}
        </div>
      </div>

      <div className="h-px bg-[#C6C6C6]/20 mx-5" />

      <div className="px-5 py-4">
        <button
          onClick={handleProfile}
          className="flex items-center gap-3 w-full px-3 h-10 rounded-xs text-[15px] font-rethink font-medium text-[#0E0D0C] hover:bg-[#F5F5F5]/80 transition-colors cursor-pointer"
        >
          <AiOutlineUser size={16} />
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 h-10 rounded-xs text-[15px] font-rethink font-medium text-[#EA0000] hover:bg-[#EA0000]/6 transition-colors cursor-pointer"
        >
          <AiOutlineLogout size={16} />
          Logout
        </button>
      </div>

    </div>
  );
}

export default AccountDropdown;