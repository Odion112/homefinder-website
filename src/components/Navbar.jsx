import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import AccountDropdown from "./AccountDropdown";
import ProfileModal from "./ProfileModal";

function Navbar() {
  const location = useLocation();

  const isLoggedIn = true;
  const role = "seeker"; // "guest" | "seeker" | "owner"
  const user = {
    initials: "JD",
    avatarUrl: avatar,
    name: "John Doe",
    email: "john@example.com",
    phone: "+234 8908 8746",
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function isCurrentPage(path) {
    return location.pathname === path;
  }

  return (
    <>
      <nav className="h-[102px] px-[60px] border-b border-[#C6C6C64A]">
        <div className="h-full flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="HomeFinder Logo" className="w-[190px]" />
          </Link>

          {/* CENTER NAV LINKS */}
          <div className="h-full flex items-center gap-14">

            {/* GUEST LINKS */}
            {role === "guest" && (
              <Link to="/properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/properties") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>
                Properties
              </Link>
            )}

            {/* SEEKER LINKS */}
            {role === "seeker" && (
              <Link to="/properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/properties") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>
                Properties
              </Link>
            )}

            {/* OWNER LINKS */}
            {role === "owner" && (
              <>
                <Link to="/properties"
                  className={`h-full flex items-center text-[18px] font-rethink font-regular
                    ${isCurrentPage("/properties") ? "border-b-[3px] border-accent font-medium" : ""}
                  `}>
                  Properties
                </Link>
                <Link to="/my-listings"
                  className={`h-full flex items-center text-[18px] font-rethink font-regular
                    ${isCurrentPage("/my-listings") ? "border-b-[3px] border-accent font-medium" : ""}
                  `}>
                  My Listings
                </Link>
              </>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {/* Guest: Sign in link */}
            {role === "guest" && (
              <Link to="/signin" className="text-[18px] font-rethink font-regular">
                Sign in
              </Link>
            )}

            {/* Logged in: Avatar + Dropdown */}
            {(role === "seeker" || role === "owner") && (
              <div className="relative" ref={avatarRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none cursor-pointer"
                >
                  {role === "seeker" && (
                    <div className="w-[48px] h-[48px] rounded-full bg-gray-200 flex items-center justify-center text-[16px] font-rethink font-medium text-EEEDF6">
                      {user.initials}
                    </div>
                  )}
                  {role === "owner" && (
                    <img
                      src={user.avatarUrl}
                      alt="User avatar"
                      className="w-[48px] h-[48px] rounded-full object-cover"
                    />
                  )}
                </button>

                {dropdownOpen && (
                  <AccountDropdown
                    onClose={() => setDropdownOpen(false)}
                    onProfileOpen={() => {
                      setDropdownOpen(false);
                      setProfileOpen(true);
                    }}
                    user={user}
                    role={role}
                  />
                )}
              </div>
            )}

            {/* List Property button */}
            <Link to="/list-property"
              className="bg-accent text-surface w-[169px] h-[46px] rounded-xs text-[18px] font-rethink font-regular flex items-center justify-center">
              List Property
            </Link>

          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        user={user}
      />
    </>
  );
}

export default Navbar;