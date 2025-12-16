export default function StripeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
        <h3 className="text-xl font-semibold mb-2">
          Upgrade to unlock full playlist
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Get unlimited tracks + Spotify export.
        </p>

        <button className="w-full py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Upgrade for €9
        </button>

        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-400"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
