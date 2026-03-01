import { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";

export default function SettingsModal({ isOpen, onClose }) {
  const { user, setUser } = useAuth();

  const [active, setActive] = useState("profile");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "",
    profileImage: null,
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  if (!isOpen || !user) return null;

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({
      ...form,
      profileImage: file,
    });
  };

  /* ================= UPDATE PROFILE ================= */
  const handleSaveChanges = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);

      if (form.profileImage instanceof File) {
        formData.append("profileImage", form.profileImage);
      }

      const res = await axiosInstance.patch(
        "/api/v1/auth/update-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (res?.data?.success) {
        const updatedUser = res.data.data;

        const mergedUser = { ...user, ...updatedUser };

        setUser(mergedUser);
        localStorage.setItem("authUser", JSON.stringify(mergedUser));

        toast.success("Profile updated successfully");
        onClose();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CHANGE PASSWORD ================= */
  const handleChangePassword = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.patch("/api/v1/auth/change-password", {
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      });

      if (res?.data?.success) {
        toast.success("Password changed successfully");
        setPasswords({
          currentPassword: "",
          newPassword: "",
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Password change failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <FiX size={28} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Profile Settings
        </h2>

        {/* ================= PROFILE SECTION ================= */}

        <div className="bg-gray-50 border border-gray-200 rounded-2xl mb-6 overflow-hidden shadow-sm">
          <button
            onClick={() => setActive(active === "profile" ? "" : "profile")}
            className="w-full flex justify-between items-center px-6 py-5 font-semibold text-lg bg-white hover:bg-gray-100 transition"
          >
            <span className="flex items-center gap-2">
              👤 Profile Information
            </span>

            <FiChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                active === "profile" ? "rotate-180 text-purple-600" : ""
              }`}
            />
          </button>

          {active === "profile" && (
            <div className="px-6 pb-8 pt-4 space-y-6 bg-gray-50">
              {/* PROFILE IMAGE */}
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <img
                    src={
                      form.profileImage
                        ? URL.createObjectURL(form.profileImage)
                        : user.profileImage
                          ? `${import.meta.env.VITE_BACKEND_URL}${user.profileImage}`
                          : "https://via.placeholder.com/100"
                    }
                    alt="profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />

                  <label className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 cursor-pointer transition">
                    Change
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>

                <div>
                  <p className="font-semibold text-lg">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              {/* INPUTS */}
              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <InputField label="Email" value={user.email} disabled />
              </div>

              {/* SAVE BUTTON */}
              <button
                onClick={handleSaveChanges}
                disabled={loading}
                className={`w-full mt-2 py-3 rounded-2xl font-semibold text-white transition-all duration-300 cursor-pointer
          ${
            loading
              ? "bg-gray-400"
              : "bg-gradient-to-r from-[#9810FA] to-[#155DFC] hover:scale-[1.02] shadow-lg hover:shadow-xl"
          }`}
              >
                {loading ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          )}
        </div>

        {/* ================= PASSWORD SECTION ================= */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl mb-6 overflow-hidden shadow-sm">
          <button
            onClick={() => setActive(active === "password" ? "" : "password")}
            className="w-full flex justify-between items-center px-6 py-5 font-semibold text-lg bg-white hover:bg-gray-100 transition"
          >
            <span className="flex items-center gap-2">🔒 Change Password</span>

            <FiChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                active === "password" ? "rotate-180 text-purple-600" : ""
              }`}
            />
          </button>

          {active === "password" && (
            <div className="px-6 pb-8 pt-4 space-y-6 bg-gray-50">
              {/* INFO TEXT */}
              <p className="text-sm text-gray-500">
                For security reasons, please enter your current password before
                setting a new one.
              </p>

              {/* PASSWORD INPUTS */}
              <div className="space-y-4">
                <PasswordField
                  label="Current Password"
                  placeholder="Enter current password"
                  value={passwords.currentPassword}
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      currentPassword: e.target.value,
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
              </div>

              {/* UPDATE BUTTON */}
              <button
                onClick={handleChangePassword}
                disabled={
                  loading ||
                  !passwords.currentPassword.trim() ||
                  !passwords.newPassword.trim()
                }
                className={`w-full py-3 rounded-2xl font-semibold text-white transition-all duration-300 cursor-pointer
          ${
            loading
              ? "bg-gray-400"
              : "bg-gradient-to-r from-[#9810FA] to-[#155DFC] hover:scale-[1.02] shadow-lg hover:shadow-xl"
          }`}
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
