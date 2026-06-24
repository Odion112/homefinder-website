import Button from "./Button";

const ConfirmDialog = () => {
  return (
    <div className="w-[446px] h-[238px] bg-white rounded-[10px] p-9">
      <h2 className="text-[20px] font-neue font-semibold text-center">
        Logout?
      </h2>

      <p className="text-[20px] font-neue text-center mt-6">
        You'll need to sign in again to access your account.
      </p>

      <div className="flex justify-center gap-[10px] mt-8">
        <Button
        variant="outline"
        >
          Cancel
        </Button>
        <Button 
        variant="base"
        className="bg-[#EA0000] text-white">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDialog;