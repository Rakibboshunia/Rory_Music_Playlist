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
      <div className="w-full max-w-md bg-linear-to-br from-gray-50 to-gray-100 p-16 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-3">
          Verify OTP
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="w-full border rounded-lg px-4 py-3 text-center tracking-widest"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-linear-to-r from-[#9810FA] to-[#155DFC] text-white rounded-lg cursor-pointer disabled:opacity-60 transition-all duration-300 ease-out
                hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
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
