import { useNavigate } from "react-router-dom";

export default function SignupAlertModal({ open }) {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
        <h3 className="text-lg font-semibold">
          Create an account to continue
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Please sign up first to use our personalised playlist experience.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
