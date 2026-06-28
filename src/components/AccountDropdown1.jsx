import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const AccountDropdown = () => {
  return (
    <div className="w-[328px] bg-white">
      <div className="flex items-center gap-4 px-5 h-[56px]">
        <GoPerson size={24} />
        <span className="text-[22px] font-normal">Profile</span>
      </div>

      <div className="flex items-center gap-4 px-5 h-[56px]">
        <IoSettingsOutline size={24} />
        <span className="text-[22px] font-normal">Settings</span>
      </div>

      <div className="flex items-center gap-4 px-5 h-[56px] text-[#EA0000]">
        <IoMdLogOut size={24} />
        <span className="text-[22px] font-normal">Logout</span>
      </div>
    </div>
  );
};

export default AccountDropdown;