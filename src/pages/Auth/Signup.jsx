import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁️ NEW

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/register`,
        { name, email, password }
      );

      toast.success(res.data?.message || "Signup successful!");
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Get Started Now
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full border rounded-lg px-4 py-3 pr-10"
              placeholder="Create a password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
        </div>

        {/* TERMS */}
        <div className="flex items-start gap-2 text-sm cursor-pointer">
          <input type="checkbox" required className="mt-1" />
          <span>
            I agree to the{" "}
            <Link to="/terms" className="text-blue-600 underline">
              Terms & Policy
            </Link>
          </span>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-linear-to-r from-[#155DFC] to-[#9810FA] text-white font-medium hover:bg-blue-700 transition cursor-pointer"
          disabled={loading}
        >
          {loading ? "Signing..." : "Sign Up"}
        </button>

        {/* FOOTER */}
        <div className="flex justify-between items-center text-sm mt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-linear-to-r from-[#155DFC] to-[#9810FA] hover:underline cursor-pointer"
          >
            ← Back to Home
          </button>

          <p>
            Have an account?{" "}
            <Link
              to="/login"
              className="bg-linear-to-r from-[#155DFC] to-[#9810FA] font-medium hover:underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>

      </form>
    </div>
  );
}
