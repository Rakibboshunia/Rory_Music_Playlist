import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useAuth } from "../../context/AuthContext";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import EditProfileModal from "../components/profile/EditProfileModal";
import ChangePasswordModal from "../components/profile/ChangePasswordModal";
import { PrimaryButton } from "../components/common/Buttons";

export default function Profile() {
  const { user, setUser } = useAuth();

  const [editOpen, setEditOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [form, setForm] = useState(user || {});

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  /* 🔥 If user not loaded yet */
  if (!user) {
    return null;
  }

  /* ================= SAVE PROFILE ================= */
  const handleSaveProfile = async () => {
    try {
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

        setEditOpen(false);
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.error("Profile Update Error:", error);
      toast.error(
        error?.response?.data?.message || "Profile update failed"
      );
    }
  };

  /* 🔥 Cache Busting */
  const profileImageUrl = user.profileImage
    ? `${import.meta.env.VITE_BACKEND_URL}${user.profileImage}?t=${Date.now()}`
    : null;

  return (
    <>
      <PageHeader title="Profile" subtitle="Your Profile Information" />

      {/* Top Section */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt="avatar"
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <span className="text-lg font-semibold text-gray-500">
                {user.name?.charAt(0)?.toUpperCase()}
              </span>
            )}
          </div>

          <button
            onClick={() => setEditOpen(true)}
            className="absolute bottom-1 right-1 bg-white border rounded-full p-1 shadow cursor-pointer"
          >
            <Icon icon="mdi:pencil" />
          </button>
        </div>

        <PrimaryButton
          className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer hover:bg-red-100 transition shadow border border-gray-300"
          onClick={() => setPasswordOpen(true)}
        >
          <Icon icon="mdi:lock-outline" />
          Change Password
        </PrimaryButton>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-xl p-6 max-w-3xl shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">Profile Information</h3>

          <PrimaryButton
            className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl hover:bg-blue-100 transition shadow border border-gray-300"
            onClick={() => setEditOpen(true)}
          >
            <Icon icon="mdi:pencil-outline" />
            Edit
          </PrimaryButton>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              disabled
              value={user.name}
              className="w-full mt-1 rounded-lg px-4 py-2 bg-gray-50 shadow"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              disabled
              value={user.email}
              className="w-full mt-1 rounded-lg px-4 py-2 bg-gray-50 shadow"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        form={form}
        setForm={setForm}
        onSave={handleSaveProfile}
      />

      <ChangePasswordModal
        open={passwordOpen}
        onClose={() => setPasswordOpen(false)}
      />
    </>
  );
}