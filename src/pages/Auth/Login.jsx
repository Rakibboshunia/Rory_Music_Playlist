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
    <div className="w-full max-w-xl bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-14 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Welcome back!
      </h1>

      <p className="text-gray-500 text-center mb-8">
        Enter your credentials to access your account
      </p>

      <form onSubmit={handleLogin} className="space-y-5">
        {/* EMAIL */}
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

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full border rounded-lg px-4 py-3 pr-10"
              placeholder="Enter your password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
          className="w-full py-3 rounded-lg bg-linear-to-r from-[#9810FA] to-[#155DFC] text-white font-medium transition cursor-pointer disabled:opacity-60"
        >
          {loading ? "Logging..." : "Login"}
        </button>
      </form>

      <p className="text-md text-center mt-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-medium">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
