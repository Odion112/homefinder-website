const ConfirmDialog = () => {
  return (
    <div className="w-[446px] h-[238px] bg-whiterounded-[10px] p-9">

      <h2 className="text-[20px] font-NeueHaasGroteskPro font-semibold text-center">
        Logout?
      </h2>

      <p className="text-[20px] font-NeueHaasGroteskPro text-center mt-6">
        You'll need to sign in again to access your account.
      </p>

      <div className="flex justify-center gap-[10px] mt-8">

        <button className="w-[155px] h-[46px] border border-[#69626299] rounded-[4px] text-[16px] font-medium">
          Cancel
        </button>

        <button className="w-[155px] h-[46px] bg-[#EA0000] rounded-[4px] text-white text-[16px] font-medium">
          Logout
        </button>

      </div>

    </div>
  );
};

export default ConfirmDialog;