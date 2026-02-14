import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /* ================= HANDLE LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = res.data?.data?.token;
      const user = res.data?.data?.user;

      if (!token || !user) {
        toast.error("Login failed. Invalid response.");
        return;
      }

      /* ===== SAVE USER + TOKEN ===== */
      login(user, token);

      toast.success("Login successful!");

      /* ===== ROLE BASED REDIRECT (FIXED ONLY THIS PART) ===== */
      const role = user.userType || user.role;

      if (role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

    } catch (error) {
      console.error("Login Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div
      className="
        relative
        w-full
        max-w-xl
        bg-white/80
        backdrop-blur-xl
        rounded-[28px]
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]
        p-10 md:p-16
        space-y-6
        animate-fade-in
      "
    >
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#9810FA]/15 to-[#155DFC]/15 blur-2xl -z-10" />

      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center text-gray-900">
        Welcome Back!
      </h1>

      <p className="text-gray-500 text-center">
        Enter your credentials to access your account
      </p>

      {/* ================= FORM ================= */}
      <form onSubmit={handleLogin} className="space-y-6 mt-6">
        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-5
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-[#9810FA]
              transition
            "
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-5
                py-3
                pr-12
                focus:outline-none
                focus:ring-2
                focus:ring-[#9810FA]
                transition
              "
            />

            {/* TOGGLE BUTTON */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-[#9810FA] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-[#9810FA]
            to-[#155DFC]
            text-white
            font-semibold
            transition
            hover:opacity-90
            disabled:opacity-60
          "
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* SIGNUP LINK */}
      <p className="text-md text-center mt-8 text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
