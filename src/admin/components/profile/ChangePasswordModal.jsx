import Modal from "../common/Modal";
import FormInput from "../common/FormInput";
import { PrimaryButton, OutlineButton } from "../common/Buttons";

export default function ChangePasswordModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      title="Password Change"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          <OutlineButton onClick={onClose}>Cancel</OutlineButton>
          <PrimaryButton onClick={onClose}>Save</PrimaryButton>
        </div>
      }
    >
      <FormInput label="Old Password" type="password" />
      <FormInput label="New Password" type="password" />
      <FormInput label="Confirm Password" type="password" />
    </Modal>
  );
}