import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function VerifyOTP() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const email = state?.email;

  // Safety check
  if (!email) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">
          Invalid request. Please try again.
        </p>
      </div>
    );
  }

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp) return toast.error("Please enter the OTP");

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/verify-otp`,
        { email, otp }
      );

      if (res?.data?.success) {
        toast.success("OTP verified successfully");
        navigate("/reset-password", { state: { email } });
      } else {
        toast.error(res?.data?.message || "Invalid OTP");
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

        <h1 className="text-3xl font-extrabold text-center mb-2 text-gray-900">
          Verify OTP
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="
              w-full
              rounded-xl
              border border-gray-200
              px-5 py-4
              text-center
              tracking-widest
              bg-white
              focus:outline-none
              focus:ring-2 focus:ring-[#9810FA]/40
              transition
            "
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

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
            {loading ? "Verifying..." : "Verify OTP"}
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
