import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Logo from "../../assets/img/logo3.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/forgot-password`,
        { email: email.trim() },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res?.data?.success) {
        toast.success(res.data.message || "OTP sent successfully");

        // Move to OTP page
        navigate("/verify-otp", { state: { email } });
      } else {
        toast.error(res?.data?.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Forgot Password Error:", err);

      toast.error(
        err?.response?.data?.message || "Server error"
      );
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
          space-y-8
          animate-fade-in
        "
      >
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#9810FA]/15 to-[#155DFC]/15 blur-2xl -z-10" />

        <div className="flex justify-center mb-4 pb-5">
          <img
            src={Logo}
            alt="logo"
            className="h-20 w-20 scale-[4.5] object-contain"
          />
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl pt-5 font-extrabold text-gray-900">
            Forgot your password
          </h1>
          <p className="text-gray-500 mt-4 text-sm">
            Enter your email address and we’ll send you a verification code.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
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
              py-4 cursor-pointer
              rounded-xl
              bg-linear-to-r from-[#9810FA] to-[#155DFC]
              text-white
              font-semibold
              transition-all duration-300
              hover:scale-[1.03]
              active:scale-[0.97]
              disabled:opacity-60
            "
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

        <div className="mt-8 flex justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="flex-1 text-purple-500"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={() => navigate("/reset-password", { state: { email } })}
            className="flex-1 text-blue-500"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}