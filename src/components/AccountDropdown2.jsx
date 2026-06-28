import AccountDropdown1 from "./AccountDropdown1";

const AccountDropdown2 = () => {
  return (
    <div
      className="
         w-[388px]
         h-[352px]
        bg-white
        rounded-[10px]
        shadow-lg
        p-8
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            w-[70px]
            h-[70px]
            rounded-full
            bg-[#F3F2FF]
            flex
            items-center
            justify-center
          "
        >
          <span className="text-[32px] font-semibold text-black">
            JD
          </span>
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-black">
            John Doe
          </h2>

          <p className="text-[16px] text-[#3F3F46]">
            johndoe@gmail.com
          </p>
        </div>
      </div>

      <hr className="my-6 border-[#E5E7EB]" />

      <AccountDropdown1 />
    </div>
  );
};

export default AccountDropdown2;