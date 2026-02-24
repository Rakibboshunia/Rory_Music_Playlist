import Modal from "../common/Modal";
import FormInput from "../common/FormInput";
import { PrimaryButton, OutlineButton } from "../common/Buttons";

export default function EditProfileModal({
  open,
  onClose,
  form,
  setForm,
  onSave,
}) {
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setForm({
      ...form,
      avatar: preview,
      profileImage: file, // Important for API upload
    });
  };

  return (
    <Modal
      open={open}
      title="Profile Information"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-5">
          <OutlineButton onClick={onClose}>Cancel</OutlineButton>
          <PrimaryButton onClick={onSave}>Save</PrimaryButton>
        </div>
      }
    >
      {/* Avatar Upload */}
      <div className="mb-8">
        <label className="block text-md mb-4">Profile Picture</label>

        <div className="flex items-center gap-6">
          {/* Preview */}
          {(form.avatar || form.profileImage) && (
            <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200">
              <img
                src={
                  form.avatar
                    ? form.avatar
                    : form.profileImage
                    ? `${import.meta.env.VITE_BACKEND_URL}${form.profileImage}`
                    : ""
                }
                alt="preview"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          )}

          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />

          <label
            htmlFor="avatarUpload"
            className="inline-block text-sm border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            Change Photo
          </label>
        </div>
      </div>

      <FormInput
        label="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <FormInput label="Email" value={form.email} disabled />
    </Modal>
  );
}