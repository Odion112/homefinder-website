import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
//import AccountDropdown from "./AccountDropdown";

function Navbar() {
  const location = useLocation();

  
  //  To see the different states of the navbar, change the const role to  "guest", "seeker" or "owner". We will replace these with real auth data later.

  const isLoggedIn = true;
  const role = "guest"; // "guest" | "seeker" | "owner"
  const user = {
    initials: "JD",     // shown when no photo is available
    avatarUrl: avatar,  
    name: "John Doe",
    email: "john@example.com",
  };


  // Controls whether the dropdown is open or closed
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // This ref is attached to the avatar button area so we can detect clicks outside it
  const avatarRef = useRef(null);

  // Close the dropdown when the user clicks anywhere outside the avatar
  useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    // Listen for clicks on the whole page
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: stop listening when the component is removed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // To check if a link is the current page. Returns true/false is used to add the orange underline
  function isCurrentPage(path) {
    return location.pathname === path;
  }

  return (
    <nav className="h-[102px] px-[60px] border-b border-[#C6C6C64A]">
      <div className="h-full flex items-center justify-between">

       
        {/* LOGO */}
    
        <Link to="/">
          <img src={logo} alt="HomeFinder Logo" className="w-[190px]" />
        </Link>

  
        {/* CENTER NAV LINKS */}
        
        <div className="h-full flex items-center gap-14">

          {/* GUEST LINKS: sees About + Properties */}
          {role === "guest" && (
            <>
              <Link to="/about"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/about") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>
                About
              </Link>

              <Link to="/properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/properties") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>
                Properties
              </Link>
            </>
          )}

          {/* PROPERTY SEEKER LINKS: sees Properties + Saved Properties */}
          {role === "seeker" && (
            <>
              <Link to="/properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/properties") ? "border-b-[3px] border-accent  font-medium" : ""}
                `}>

                Properties

              </Link>

              <Link to="/saved-properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/saved-properties") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>

                Saved Properties

              </Link>
            </>
          )}

          {/* PROPERTY OWNER LINKS: sees Properties + Saved Properties + My Listings */}
          {role === "owner" && (
            <>
              <Link to="/properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/properties") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>

                Properties

              </Link>

              <Link to="/saved-properties"
                className={`h-full flex items-center text-[18px] font-rethink font-regular
                  ${isCurrentPage("/saved-properties") ? "border-b-[3px] border-accent font-medium" : ""}
                `}>

                Saved Properties

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

          {/* Show "Sign in" link if user is a guest */}
          {role === "guest" && (
            <Link to="/signin" className="text-[18px] font-rethink font-regular">

              Sign in

            </Link>
          )}

           {/* Show avatar if user is logged in (seeker or owner) */}
{(role === "seeker" || role === "owner") && (
  // avatarRef wraps the button + dropdown so we can detect outside clicks
  <div className="relative" ref={avatarRef}>

    {/* Clicking the avatar opens/closes the dropdown */}
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="focus:outline-none cursor-pointer"
    >
      {/* PROPERTY SEEKER: always shows initials in a circle */}
      {role === "seeker" && (
        <div className="w-[48px] h-[48px] rounded-full bg-gray-200 flex items-center justify-center text-[16px] font-rethink font-medium text-EEEDF6">
          {user.initials}
        </div>
      )}

      {/* PROPERTY OWNER: shows their uploaded photo */}
      {role === "owner" && (
        <img
          src={user.avatarUrl}
          alt="User avatar"
          className="w-[48px] h-[48px] rounded-full object-cover"
        />
      )}
    </button>

              {/* ACCOUNT DROPDOWN COMPONENT */}

              {/* onClose — closes the dropdown when user clicks any option */}
              {dropdownOpen && (
                //<AccountDropdown onClose={() => setDropdownOpen(false)} user={user}/>
            <div> Dropdown component will be added here</div>
              )}

            </div>
          )}

          {/* List Property button — always visible */}
          <Link to="/list-property"
            className="bg-accent text-surface w-[169px] h-[46px] rounded-xs text-[18px] font-rethink font-regular flex items-center justify-center">

            List Property

          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;