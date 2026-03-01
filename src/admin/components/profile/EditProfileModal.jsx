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
      profileImage: file,     
    });
  };

  const imageSrc =
    form.avatar
      ? form.avatar
      : form.profileImage && typeof form.profileImage === "string"
      ? `${import.meta.env.VITE_BACKEND_URL}${form.profileImage}`
      : null;

  return (
    <Modal
      open={open}
      title="Profile Information"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-4 pt-4">
          <OutlineButton onClick={onClose}>
            Cancel
          </OutlineButton>

          <PrimaryButton onClick={onSave}>
            Save Changes
          </PrimaryButton>
        </div>
      }
    >
      <div className="space-y-8">

        {/* ================= PROFILE IMAGE ================= */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-4">
            Profile Picture
          </label>

          <div className="flex items-center gap-6">

            {/* IMAGE PREVIEW */}
            <div className="relative group">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-md">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* HOVER OVERLAY */}
              <label
                htmlFor="avatarUpload"
                className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition cursor-pointer"
              >
                Change
              </label>
            </div>

            {/* HIDDEN FILE INPUT */}
            <input
              id="avatarUpload"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />

            {/* CHANGE BUTTON */}
            <label
              htmlFor="avatarUpload"
              className="inline-block text-sm border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
            >
              Upload New Photo
            </label>
          </div>
        </div>

        {/* ================= FORM INPUTS ================= */}
        <div className="space-y-5">
          <FormInput
            label="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <FormInput
            label="Email Address"
            value={form.email}
            disabled
          />
        </div>

      </div>
    </Modal>
  );
}