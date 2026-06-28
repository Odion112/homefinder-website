const ConfirmDialog = ({
  title = "Logout?",
  message = "You'll need to sign in again to access your account.",
  cancelLabel = "Cancel",
  confirmLabel = "Logout",
  confirmColor = "#EA0000",
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="w-[446px] h-[280px] bg-white rounded-[4px] pt-10 pb-10 pl-10 pr-10 ">
      <h2 className="text-[20px] font-neue font-medium text-center">
        {title}
      </h2>
      <p className="text-[20px] font-neue text-center mt-6">
        {message}
      </p>
      <div className="flex justify-center gap-[10px] mt-8">
        <button
          onClick={onCancel}
          className="w-[155px] h-[46px] border border-[#69626299] rounded-[4px] text-[16px] font-neue font-roman"
        >
          {cancelLabel}
        </button>
        <button
          onClick={onConfirm}
          style={{ backgroundColor: confirmColor }}
          className="w-[155px] h-[46px] rounded-[4px] text-white text-[16px] font-neue font-roman"
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;