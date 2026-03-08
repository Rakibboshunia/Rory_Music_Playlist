import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import EditProfileModal from "../components/profile/EditProfileModal";
import ChangePasswordModal from "../components/profile/ChangePasswordModal";
import { PrimaryButton } from "../components/common/Buttons";

import { updateAdminProfileApi } from "../../api/adminApi";

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

  if (!user) return null;

  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();

      if (form.name) {
        formData.append("name", form.name);
      }

      if (form.profileImage instanceof File) {
        formData.append("profileImage", form.profileImage);
      }

      const res = await updateAdminProfileApi(formData);

      if (res?.data?.success) {
        const updatedUser = res.data.data;

        const mergedUser = { ...user, ...updatedUser };

        setUser(mergedUser);
        localStorage.setItem("authUser", JSON.stringify(mergedUser));

        setEditOpen(false);
        toast.success(res.data.message || "Profile updated successfully");
      }
    } catch (error) {

      toast.error(
        error?.response?.data?.message || "Profile update failed"
      );
    }
  };

  const profileImageUrl = user.profileImage
    ? `${import.meta.env.VITE_BACKEND_URL}${user.profileImage}?t=${Date.now()}`
    : null;

  return (
    <>
      <PageHeader title="Profile" subtitle="Your Profile Information" />

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
          className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-200 transition border border-gray-300"
          onClick={() => setPasswordOpen(true)}
        >
          <Icon icon="mdi:lock-outline" />
          Change Password
        </PrimaryButton>
      </div>

      <div className="bg-white rounded-xl p-6 max-w-3xl shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">Profile Information</h3>

          <PrimaryButton
            className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl hover:bg-gray-200 transition border border-gray-300"
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
              className="w-full mt-1 rounded-lg px-4 py-2 bg-white border border-gray-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              disabled
              value={user.email}
              className="w-full mt-1 rounded-lg px-4 py-2 bg-white border border-gray-300"
            />
          </div>
        </div>
      </div>

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