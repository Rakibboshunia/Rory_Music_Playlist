
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

      if (result.data.success || result.data.status === "success") {
        const user =
          result.data.user || result.data.data?.user || null;

        const token = result.data?.data?.token;

        // 🔥 FIXED COOKIE (localhost safe)
        Cookies.set("token", token, {
          expires: 7,
          sameSite: "lax",
          secure: import.meta.env.PROD, // ❗ important
        });

        login(user);
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center mb-2">Welcome back!</h1>
      <p className="text-gray-500 text-center mb-8">
        Enter your credentials to access your account
      </p>

      <form onSubmit={handleLogin} className="space-y-5">
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

        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 transition"
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
