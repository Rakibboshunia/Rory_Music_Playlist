import { useState } from "react";

export default function Accordion({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex justify-between items-center"
      >
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 text-sm text-gray-500">
          Playlist tracks will appear here.
        </div>
      )}
    </div>
  );
}
