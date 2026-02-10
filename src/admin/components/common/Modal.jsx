export default function Modal({ open, title, onClose, children, footer }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-120 p-10 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-2xl cursor-pointer hover:text-red-500 transition">
              ✕
          </button>
        </div>

        {children}

        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
}