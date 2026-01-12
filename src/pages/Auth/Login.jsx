import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);

      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/users/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const token = result.data?.data?.token;

      if (!token) {
        toast.error("Login failed");
        return;
      }

      Cookies.set("token", token, {
        expires: 7,
        sameSite: "lax",
        secure: import.meta.env.PROD,
      });

      login({ email });

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      relative
      w-full max-w-xl
      bg-white/80 backdrop-blur-xl
      rounded-[28px]
      shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]
      p-16
      space-y-6
      animate-fade-in
    ">
      {/* Soft gradient glow */}
      <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-[#9810FA]/15 to-[#155DFC]/15 blur-2xl -z-10" />

      <h1 className="text-3xl font-extrabold text-center mb-2 text-gray-900">
        Welcome back!
      </h1>

      <p className="text-gray-500 text-center mb-10">
        Enter your credentials to access your account
      </p>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
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
            placeholder="Enter your email"
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
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
              placeholder="Enter your password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                text-gray-500
                hover:scale-110
                transition
              "
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-[#9810FA] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
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
          {loading ? "Logging..." : "Login"}
        </button>
      </form>

      <p className="text-md text-center mt-8 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
