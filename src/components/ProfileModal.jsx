import { useState } from "react";
import { PiEyeSlash, PiEye, PiX } from "react-icons/pi";
import NotificationPopup from "./NotificationPopup";
import Button from "./Button";
import Input from "./Input";

const InfoField = ({ label, value }) => (
  <div className="mb-4">
    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
    <p className="text-sm font-semibold text-gray-900">{value}</p>
  </div>
);

const ProfileModal = ({ isOpen, onClose, user, onSaveProfile, onSavePassword }) => {
  const [view, setView] = useState("default");

  const [profileForm, setProfileForm] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
  });

  const [passwordForm, setPasswordForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [showPass, setShowPass] = useState({
    current: false,
    newPass: false,
    confirm: false,
  });

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

  const togglePass = (field) =>
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));

  const EyeToggle = ({ field }) => (
    <button
      type="button"
      onClick={() => togglePass(field)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
    >
      {showPass[field] ? <PiEye size={16} /> : <PiEyeSlash size={16} />}
    </button>
  );

  if (!isOpen) return null;

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
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <PiX size={20} />
          </button>

          {/* ── DEFAULT VIEW ── */}
          {view === "default" && (
            <>
              <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Profile Information
              </h2>
              <InfoField label="Full name" value={user?.name} />
              <InfoField label="Email address" value={user?.email} />
              <InfoField label="Phone number" value={user?.phone} />

              <Button
                variant="filled"
                className="!w-full !h-10 !rounded-lg"
                onClick={() => setView("editProfile")}
              >
                Edit profile
              </Button>

              <div className="border-t border-gray-100 mt-6 pt-4">
                <p className="text-xs text-gray-400 mb-3">Security</p>
                <p className="text-sm font-semibold text-gray-900">Password</p>
                <p className="text-xs text-gray-400 mb-4">Last changed 30 days ago</p>
                <Button
                  variant="outline"
                  className="!w-full !h-10 !rounded-lg hover:!bg-gray-50 hover:!text-gray-800"
                  onClick={() => setView("changePassword")}
                >
                  Change password
                </Button>
              </div>
            </>
          )}

          {/* ── EDIT PROFILE VIEW ── */}
          {view === "editProfile" && (
            <>
              <h2 className="text-sm font-semibold text-gray-900 mb-5">
                Profile Information
              </h2>

              <Input
                label="Full name"
                value={profileForm.name}
                onChange={(e) => setProfileForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Enter full name"
                className="!w-full mb-4"
              />
              <Input
                label="Email address"
                type="email"
                value={profileForm.email}
                onChange={(e) => setProfileForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Enter email address"
                className="!w-full mb-4"
              />
              <Input
                label="Phone number"
                value={profileForm.phone}
                onChange={(e) => setProfileForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Enter phone number"
                className="!w-full"
              />

              <div className="border-t border-gray-100 mt-4 pt-4 flex gap-3">
                <Button
                  variant="outline"
                  className="!flex-1 !w-auto !h-10 !rounded-lg hover:!bg-gray-50 hover:!text-gray-800"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  variant="filled"
                  className="!flex-1 !w-auto !h-10 !rounded-lg"
                  onClick={handleSaveProfile}
                >
                  Save changes
                </Button>
              </div>
            </>
          )}

          {/* ── CHANGE PASSWORD VIEW ── */}
          {view === "changePassword" && (
            <>
              <h2 className="text-sm font-semibold text-gray-900 mb-5">
                Change password
              </h2>

              {/* Current password */}
              <div className="relative mb-4">
                <Input
                  label="Current password"
                  type={showPass.current ? "text" : "password"}
                  value={passwordForm.current}
                  onChange={(e) =>
                    setPasswordForm((p) => ({ ...p, current: e.target.value }))
                  }
                  placeholder="Enter current password"
                  className="!w-full"
                />
                <EyeToggle field="current" />
              </div>

              {/* New password */}
              <div className="relative mb-4">
                <Input
                  label="New password"
                  type={showPass.newPass ? "text" : "password"}
                  value={passwordForm.newPass}
                  onChange={(e) =>
                    setPasswordForm((p) => ({ ...p, newPass: e.target.value }))
                  }
                  placeholder="Enter new password"
                  className="!w-full"
                />
                <EyeToggle field="newPass" />
              </div>

              {/* Confirm password */}
              <div className="relative">
                <Input
                  label="Confirm password"
                  type={showPass.confirm ? "text" : "password"}
                  value={passwordForm.confirm}
                  onChange={(e) =>
                    setPasswordForm((p) => ({ ...p, confirm: e.target.value }))
                  }
                  placeholder="Re-enter new password"
                  className="!w-full"
                />
                <EyeToggle field="confirm" />
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4 flex gap-3">
                <Button
                  variant="outline"
                  className="!flex-1 !w-auto !h-10 !rounded-lg hover:!bg-gray-50 hover:!text-gray-800"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  variant="filled"
                  className="!flex-1 !w-auto !h-10 !rounded-lg"
                  onClick={handleSavePassword}
                >
                  Save password
                </Button>
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