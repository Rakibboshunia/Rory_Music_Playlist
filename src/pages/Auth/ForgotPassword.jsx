import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return toast.error("Email is required");

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/forgot-password`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res?.data?.success) {
        toast.success(res.data.message);
        navigate("/verify-otp", { state: { email } });
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="
          relative
          w-full max-w-xl
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

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Forgot your password
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Enter your email address and we’ll send you a verification code.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-xl
                border border-gray-200
                px-5 py-3
                bg-white
                focus:outline-none
                focus:ring-2 focus:ring-[#9810FA]/40
                transition
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
