import Modal from "./Modal";
import { PrimaryButton, OutlineButton } from "./Buttons";

export default function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  description = "Are you sure you want to delete this item?",
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          {/* NO */}
          <OutlineButton onClick={onClose}>
            No
          </OutlineButton>

          {/* YES — 🔥 THIS MUST CALL onConfirm */}
          <PrimaryButton onClick={onConfirm}>
            Yes
          </PrimaryButton>
        </div>
      }
    >
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </Modal>
  );
}