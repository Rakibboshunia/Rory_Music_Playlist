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
    setForm({ ...form, avatar: preview });
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
      {/* Avatar */}
      <div className="mb-10">
        <label className="block text-md mb-4">Profile Picture</label>

        <div className="flex items-center gap-4">
          {/* Avatar Preview */}
          {form.avatar && (
            <div className="h-30 w-30 rounded-full overflow-hidden bg-gray-200">
              <img
                src={form.avatar}
                alt="preview"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          )}

          {/* Hidden file input */}
          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />

          {/* Visible button (text-width border) */}
          <label
            htmlFor="avatarUpload"
            className="
                inline-block
                text-sm
                border
                border-red-300
                rounded-md
                px-3
                py-1.5
                cursor-pointer
                hover:bg-red-100
                transition"
          >
            Change photo
          </label>
        </div>
      </div>

      <FormInput
        label="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <FormInput label="Email" value={form.email} disabled />
    </Modal>
  );
}