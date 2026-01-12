import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function ResetPassword() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = state?.email;

  if (!email) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">
          Invalid request. Please try again.
        </p>
      </div>
    );
  }

  const handleReset = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword)
      return toast.error("All fields are required");

    if (password !== confirmPassword)
      return toast.error("Passwords do not match");

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/reset-password`,
        {
          email,
          newPassword: password,
        }
      );

      if (res?.data?.success) {
        toast.success("Password reset successful");
        navigate("/login");
      } else {
        toast.error(res?.data?.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div
        className="
          relative
          w-full max-w-md
          bg-white/80 backdrop-blur-xl
          rounded-[28px]
          shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]
          p-16
          space-y-6
          animate-fade-in
        "
      >
        {/* Soft gradient glow */}
        <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-[#9810FA]/15 to-[#155DFC]/15 blur-2xl -z-10" />

        <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-900">
          Reset Password
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Enter your new password below
        </p>

        <form onSubmit={handleReset} className="space-y-6">
          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              New Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className="
                  w-full
                  rounded-xl
                  border border-gray-200
                  px-5 py-3 pr-12
                  bg-white
                  focus:outline-none
                  focus:ring-2 focus:ring-[#9810FA]/40
                  transition
                "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  text-gray-500
                  hover:scale-110
                  transition
                  cursor-pointer
                "
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="
                  w-full
                  rounded-xl
                  border border-gray-200
                  px-5 py-3 pr-12
                  bg-white
                  focus:outline-none
                  focus:ring-2 focus:ring-[#9810FA]/40
                  transition
                "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  text-gray-500
                  hover:scale-110
                  transition
                  cursor-pointer
                "
              >
                {showConfirmPassword ? "👁️" : "🙈"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-xl
              bg-linear-to-r from-[#9810FA] to-[#155DFC]
              text-white
              font-semibold
              transition-all duration-300
              hover:scale-[1.03]
              hover:shadow-xl
              active:scale-[0.97]
              cursor-pointer
              disabled:opacity-60
            "
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer text-sm"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
