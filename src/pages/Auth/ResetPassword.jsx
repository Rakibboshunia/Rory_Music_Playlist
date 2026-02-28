import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../../assets/img/logo3.png";
import { resetPasswordApi } from "../../api/authApi";

export default function ResetPassword() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const email = state?.email;

  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    if (!newPassword.trim()) {
      return toast.error("New password is required");
    }

    try {
      setLoading(true);

      const res = await resetPasswordApi({
        email,
        newPassword: newPassword.trim(),
      });

      if (res?.data?.success) {
        toast.success(res.data.message || "Password reset successfully");
        navigate("/login");
      } else {
        toast.error(res?.data?.message || "Reset failed");
      }
    } catch (err) {
      console.error("Reset Password Error:", err);
      toast.error(
        err?.response?.data?.message || "Server error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] p-16 space-y-6 animate-fade-in">

        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#9810FA]/15 to-[#155DFC]/15 blur-2xl -z-10" />

        <div className="flex justify-center mb-4">
          <img
            src={Logo}
            alt="logo"
            className="h-20 w-20 scale-[4.5] object-contain"
          />
        </div>

        <h1 className="text-3xl pt-6 font-extrabold text-center text-gray-900">
          Reset Your Password
        </h1>

        <p className="text-center text-gray-500">
          Enter your new password below.
        </p>

        <form onSubmit={handleReset} className="space-y-6">

          <input
            type="email"
            value={email}
            readOnly
            className="w-full rounded-xl border border-gray-300 px-5 py-4 bg-gray-100"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-5 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#9810FA]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#9810FA] transition"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-linear-to-r from-[#9810FA] to-[#155DFC] text-white font-semibold disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

        </form>
      </div>
    </div>
  );
}