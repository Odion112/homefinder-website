import { useState } from "react";
import { PiEyeSlash, PiEye, PiX } from "react-icons/pi";
import NotificationPopup from "./NotificationPopup";

const InfoField = ({ label, value }) => (
  <div className="mb-4">
    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
    <p className="text-sm font-semibold text-gray-900">{value}</p>
  </div>
);

const Input = ({ label, type = "text", value, onChange, placeholder, rightIcon }) => (
  <div className="mb-4">
    {label && <p className="text-xs text-gray-500 mb-1">{label}</p>}
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FE7C0B] transition-colors pr-10"
      />
      {rightIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
          {rightIcon}
        </span>
      )}
    </div>
  </div>
);

const ProfileModal = ({
  isOpen,
  onClose,
  user = { name: "John Doe", email: "john@example.com", phone: "+234 8908 8746" },
  onSaveProfile,
  onSavePassword,
}) => {
  const [view, setView] = useState("default");

  const [profileForm, setProfileForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const [passwordForm, setPasswordForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState({ current: false, newPass: false, confirm: false });
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 3000);
  };

  const handleSaveProfile = () => {
    onSaveProfile?.(profileForm);
    setView("default");
    showToast("Profile updated successfully");
  };

  const handleSavePassword = () => {
    if (passwordForm.newPass !== passwordForm.confirm) {
      showToast("Passwords do not match");
      return;
    }
    onSavePassword?.(passwordForm);
    setPasswordForm({ current: "", newPass: "", confirm: "" });
    setView("default");
    showToast("Password changed successfully");
  };

  const handleCancel = () => setView("default");

  const handleClose = () => {
    setView("default");
    onClose?.();
  };

  if (!isOpen) return null;

  const EyeIcon = ({ field }) => (
    <span onClick={() => setShowPass((p) => ({ ...p, [field]: !p[field] }))}>
      {showPass[field] ? <PiEye size={16} /> : <PiEyeSlash size={16} />}
    </span>
  );

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center"
        onClick={handleClose}
      >
        <div
          className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <PiX size={20} />
          </button>

          {view === "default" && (
            <>
              <h2 className="text-sm font-semibold text-gray-900 mb-4">Profile Information</h2>
              <InfoField label="Full name" value={user.name} />
              <InfoField label="Email address" value={user.email} />
              <InfoField label="Phone number" value={user.phone} />
              <button
                onClick={() => setView("editProfile")}
                className="w-full bg-[#FE7C0B] hover:bg-[#e56e08] text-white text-sm font-medium rounded-lg py-2.5 transition-colors mb-6"
              >
                Edit profile
              </button>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400 mb-3">Security</p>
                <p className="text-sm font-semibold text-gray-900">Password</p>
                <p className="text-xs text-gray-400 mb-4">Last changed 30 days ago</p>
                <button
                  onClick={() => setView("changePassword")}
                  className="w-full border border-gray-200 text-gray-800 text-sm font-medium rounded-lg py-2.5 hover:bg-gray-50 transition-colors"
                >
                  Change password
                </button>
              </div>
            </>
          )}

          {view === "editProfile" && (
            <>
              <h2 className="text-sm font-semibold text-gray-900 mb-5">Profile Information</h2>
              <Input
                label="Full name"
                value={profileForm.name}
                onChange={(e) => setProfileForm((p) => ({ ...p, name: e.target.value }))}
              />
              <Input
                label="Email address"
                value={profileForm.email}
                onChange={(e) => setProfileForm((p) => ({ ...p, email: e.target.value }))}
              />
              <Input
                label="Phone number"
                value={profileForm.phone}
                onChange={(e) => setProfileForm((p) => ({ ...p, phone: e.target.value }))}
              />
              <div className="border-t border-gray-100 mt-2 pt-4 flex gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 border border-gray-200 text-gray-800 text-sm font-medium rounded-lg py-2.5 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 bg-[#FE7C0B] hover:bg-[#e56e08] text-white text-sm font-medium rounded-lg py-2.5 transition-colors"
                >
                  Save changes
                </button>
              </div>
            </>
          )}

          {view === "changePassword" && (
            <>
              <h2 className="text-sm font-semibold text-gray-900 mb-5">Change password</h2>
              <Input
                label="Current password"
                type={showPass.current ? "text" : "password"}
                value={passwordForm.current}
                onChange={(e) => setPasswordForm((p) => ({ ...p, current: e.target.value }))}
                placeholder="Enter current password"
                rightIcon={<EyeIcon field="current" />}
              />
              <Input
                label="New password"
                type={showPass.newPass ? "text" : "password"}
                value={passwordForm.newPass}
                onChange={(e) => setPasswordForm((p) => ({ ...p, newPass: e.target.value }))}
                placeholder="Enter new password"
                rightIcon={<EyeIcon field="newPass" />}
              />
              <Input
                label="Confirm password"
                type={showPass.confirm ? "text" : "password"}
                value={passwordForm.confirm}
                onChange={(e) => setPasswordForm((p) => ({ ...p, confirm: e.target.value }))}
                placeholder="Re-enter new password"
                rightIcon={<EyeIcon field="confirm" />}
              />
              <div className="border-t border-gray-100 mt-2 pt-4 flex gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 border border-gray-200 text-gray-800 text-sm font-medium rounded-lg py-2.5 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePassword}
                  className="flex-1 bg-[#FE7C0B] hover:bg-[#e56e08] text-white text-sm font-medium rounded-lg py-2.5 transition-colors"
                >
                  Save password
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {toast.visible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <NotificationPopup
            message={toast.message}
            onClose={() => setToast({ visible: false, message: "" })}
          />
        </div>
      )}
    </>
  );
};

export default ProfileModal;