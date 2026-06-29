import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import AccountDropdown from "./AccountDropdown";
import ProfileModal from "./ProfileModal";

/* We'll change this to hook into our real auth later but for now we'll use "guest" | "seeker" | "owner" to switch in between roles */

const CURRENT_ROLE = "guest"; 

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const role = CURRENT_ROLE;
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function isCurrentPage(path) {
    return location.pathname === path;
  }

  // "List Property" button routes based on role
  function handleListProperty() {
    if (role === "guest") {
      navigate("/signin");           // not logged in → sign in first
    } else if (role === "seeker") {
      navigate("/owner-setup");      // logged in but not owner → owner setup step 1
    } else if (role === "owner") {
     navigate("/existing-owner-list");// already an owner → go to their listings
    }
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
            <Link
              to="/properties"
              className={`h-full flex items-center text-[18px] font-rethink font-regular
                ${isCurrentPage("/properties") ? "border-b-[3px] border-accent font-medium" : ""}
              `}>
              Properties
            </Link>

            {role === "owner" && (
              <Link
                to="/my-listings"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/my-listings") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>
                My Listings
              </Link>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {role === "guest" && (
              <Link to="/signin" className="text-[18px] font-rethink font-regular">
                Sign in
              </Link>
            )}

            {(role === "seeker" || role === "owner") && (
              <div className="relative" ref={avatarRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  className="focus:outline-none cursor-pointer"
                >
                  {role === "seeker" && (
                    <div className="w-[48px] h-[48px] rounded-full bg-gray-200 flex items-center justify-center text-[16px] font-rethink font-medium text-gray-600">
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

            {/* List Property button — routing based on role */}
            <button
              onClick={handleListProperty}
              className="bg-accent text-surface w-[169px] h-[46px] rounded-xs text-[18px] font-rethink font-regular flex items-center justify-center cursor-pointer"
            >
              List Property
            </button>

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