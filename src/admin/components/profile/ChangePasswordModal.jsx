import { useState } from "react";
import Modal from "../common/Modal";
import FormInput from "../common/FormInput";
import { PrimaryButton, OutlineButton } from "../common/Buttons";
import toast from "react-hot-toast";
import { changeAdminPasswordApi } from "../../../api/adminApi";

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

      const res = await changeAdminPasswordApi({
        currentPassword,
        newPassword,
      });

      if (res?.data?.success) {
        toast.success(res.data.message || "Password updated successfully");

        setCurrentPassword("");
        setNewPassword("");
        onClose();
      }
    } catch (error) {
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
      title="Change Password"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-4 pt-5">
          <OutlineButton onClick={onClose}>
            Cancel
          </OutlineButton>

          <PrimaryButton
            onClick={handleChangePassword}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </PrimaryButton>
        </div>
      }
    >
      <div className="space-y-6">

        <p className="text-sm text-gray-500">
          Enter your current password and set a new one to secure your account.
        </p>

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

      </div>
    </Modal>
  );
}