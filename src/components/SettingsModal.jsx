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

  /* ================= SAVE PROFILE ================= */
  const handleSaveChanges = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);

      if (form.profileImage instanceof File) {
        formData.append("profileImage", form.profileImage);
      }

      const res = await axiosInstance.patch(
        "/api/v1/admin/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
      toast.error(
        error?.response?.data?.message || "Profile update failed"
      );
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

        {/* PROFILE SECTION */}
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
              <div className="flex items-center gap-4">
                <img
                  src={
                    user.profileImage
                      ? `${import.meta.env.VITE_BACKEND_URL}${user.profileImage}`
                      : "https://via.placeholder.com/100"
                  }
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <label className="cursor-pointer text-sm text-purple-600 font-medium border rounded-md px-3 py-1">
                  Change Photo
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <InputField
                label="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <InputField
                label="Email"
                value={user.email}
                disabled
              />
            </div>
          )}
        </div>

        <button
          onClick={handleSaveChanges}
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-xl font-semibold transition
            ${
              loading
                ? "bg-gray-400 text-white"
                : "bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white"
            }`}
        >
          {loading ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}