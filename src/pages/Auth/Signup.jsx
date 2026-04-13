import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../../assets/img/logo3.png";
import { registerApi } from "../../api/authApi";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await registerApi({ name, email, password });

      toast.success(res?.data?.message || "Signup successful!");
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error);

      toast.error(
        error?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-[#9810FA]/15 to-[#155DFC]/15 blur-2xl -z-10" />

      <div className="flex justify-center mb-4 pb-5">
        <img
          src={Logo}
          alt="logo"
          className="h-20 w-20 scale-[4.5] object-contain"
        />
      </div>

      <h2 className="text-3xl pt-5 font-extrabold text-center mb-2 text-gray-900">
        Get Started Now
      </h2>

      <p className="text-gray-500 text-center mb-10">
        Create your account to get started
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#9810FA]/40 transition"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-gray-400 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#9810FA]/40 transition"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full rounded-xl border border-gray-400 px-5 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#9810FA]/40 transition"
              placeholder="Create a password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#9810FA] transition"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-3 text-sm text-gray-600">
          <input type="checkbox" required className="mt-1 accent-[#9810FA]" />
          <span>
            I agree to the{" "}
            <Link to="/terms" className="text-blue-600 underline">
              Terms & Conditions
            </Link>
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-4 rounded-xl
            bg-linear-to-r from-[#9810FA] to-[#155DFC]
            text-white font-semibold
            transition-all duration-300
            hover:scale-[1.03]
            active:scale-[0.97]
            disabled:opacity-60
          "
        >
          {loading ? "Signing..." : "Sign Up"}
        </button>
      </form>

      <p className="text-md text-center mt-8 text-gray-600">
        Have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}