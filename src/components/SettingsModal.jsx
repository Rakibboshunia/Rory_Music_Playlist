import { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";

export default function SettingsModal({
  isOpen,
  onClose,
  profile,
  setProfile,
}) {
  const [active, setActive] = useState("profile");

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({
        ...profile,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <FiX size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Profile Settings
        </h2>

        {/* ================= PROFILE ACCORDION ================= */}
        <div className="border border-gray-300 rounded-xl mb-4 overflow-hidden">

          <button
            onClick={() =>
              setActive(active === "profile" ? "" : "profile")
            }
            className="w-full flex justify-between items-center px-5 py-4 font-semibold"
          >
            Profile Information
            <FiChevronDown
              className={`transition-transform ${
                active === "profile" ? "rotate-180" : ""
              }`}
            />
          </button>

          {active === "profile" && (
            <div className="px-5 pb-6 space-y-5">

              {/* PROFILE IMAGE */}
              <div className="flex items-center gap-4">
                <img
                  src={
                    profile.image ||
                    "https://via.placeholder.com/100"
                  }
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <label className="cursor-pointer text-sm text-purple-600 font-medium">
                  Change Photo
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              {/* FULL NAME */}
              <InputField
                label="Full Name"
                value={profile.fullName}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    fullName: e.target.value,
                  })
                }
              />

              {/* EMAIL */}
              <InputField
                label="Email"
                value={profile.email}
                disabled
              />
            </div>
          )}
        </div>

        {/* ================= PASSWORD ACCORDION ================= */}
        <div className="border border-gray-300 rounded-xl overflow-hidden">

          <button
            onClick={() =>
              setActive(active === "password" ? "" : "password")
            }
            className="w-full flex justify-between items-center px-5 py-4 font-semibold"
          >
            Change Password
            <FiChevronDown
              className={`transition-transform ${
                active === "password" ? "rotate-180" : ""
              }`}
            />
          </button>

          {active === "password" && (
            <div className="px-5 pb-6 space-y-5">

              <PasswordField
                label="Current Password"
                placeholder="Enter current password"
                value={passwords.oldPassword}
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    oldPassword: e.target.value,
                  })
                }
              />

              <PasswordField
                label="New Password"
                placeholder="Enter new password"
                value={passwords.newPassword}
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    newPassword: e.target.value,
                  })
                }
              />

              <PasswordField
                label="Confirm Password"
                placeholder="Confirm new password"
                value={passwords.confirmPassword}
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
        >
          Save Changes
        </button>

      </div>
    </div>
  );
}