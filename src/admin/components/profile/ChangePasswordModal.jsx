import { useState } from "react";
import Modal from "../common/Modal";
import FormInput from "../common/FormInput";
import { PrimaryButton, OutlineButton } from "../common/Buttons";
import axiosInstance from "../../../api/axiosInstance";
import toast from "react-hot-toast";

export default function ChangePasswordModal({ open, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const res = await axiosInstance.patch(
        "/api/v1/admin/change-password",
        {
          currentPassword,
          newPassword,
        }
      );

      if (res?.data?.success) {
        toast.success("Password updated successfully");

        setCurrentPassword("");
        setNewPassword("");

        onClose();
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Password change failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      title="Password Change"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          <OutlineButton onClick={onClose}>Cancel</OutlineButton>
          <PrimaryButton onClick={handleChangePassword}>
            {loading ? "Saving..." : "Save"}
          </PrimaryButton>
        </div>
      }
    >
      <FormInput
        label="Current Password"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />

      <FormInput
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
    </Modal>
  );
}