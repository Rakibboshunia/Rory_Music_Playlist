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

    if (!email) return toast.error("Email is required");

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/forgot-password`,
        { email },
        { headers: { "Content-Type": "application/json" } },
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

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl pt-5 font-extrabold text-gray-900">
            Forgot your password
          </h1>
          <p className="text-gray-500 mt-4 text-sm">
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
        {/* Footer Buttons */}
        <div className="mt-8 flex justify-between gap-4">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="
      flex-1
      rounded-xl
      font-medium
      transition
      cursor-pointer
      text-purple-500
    "
          >
            ← Back
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => navigate("/reset-password", { state: { email } })}
            className="
      flex-1
      rounded-xl
      font-semibold
      transition-all duration-300
      cursor-pointer
      text-blue-500
    "
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
