import { useState } from "react";
import { Icon } from "@iconify/react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function DeleteAction({ onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Delete Icon */}
      <button
        onClick={() => setOpen(true)}
        className="
          text-red-500
          hover:text-red-600
          transition
          cursor-pointer
          flex
          items-center
          justify-center
        "
        aria-label="Delete"
      >
        <Icon
          icon="mdi:delete-outline"
          className="text-2xl hover:scale-110 transition-transform"
        />
      </button>

      {/* Confirmation Modal */}
      <ConfirmDeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          onDelete();   // 🔥 actual delete
          setOpen(false);
        }}
      />
    </>
  );
}