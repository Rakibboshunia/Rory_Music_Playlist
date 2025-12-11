import React, { useState } from "react";
import AuthInput from "./components/AuthInput";
import GradientButton from "../../components/GradientButton";
import Divider from "./components/Divider";
import SocialButton from "./components/SocialButton";
import { login } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({ email: form.email, password: form.password });
      navigate("/"); // adjust: redirect after login
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
      <p className="text-sm text-gray-600 mb-6">Enter your Credentials to access your account</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email address"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          placeholder="Enter your email"
          type="email"
        />

        <div>
          <div className="flex justify-between items-center text-sm mb-1">
            <label className="text-gray-700">Password</label>
            <Link to="#" className="text-sm text-indigo-600">
              forgot password
            </Link>
          </div>
          <AuthInput
            label=""
            value={form.password}
            onChange={(v) => setForm((s) => ({ ...s, password: v }))}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <div className="flex items-center gap-2 text-sm">
          <input
            id="remember"
            type="checkbox"
            checked={form.remember}
            onChange={(e) => setForm((s) => ({ ...s, remember: e.target.checked }))}
            className="w-4 h-4 rounded border-gray-300"
          />
          <label htmlFor="remember" className="text-gray-600">
            Remember for 30 days
          </label>
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <GradientButton text={loading ? "Logging in..." : "Login"} full type="submit" />

        <Divider label="or" />

        <div className="flex gap-3">
          <SocialButton provider="google" onClick={() => alert("Google sign in (implement)")} />
          <SocialButton provider="apple" onClick={() => alert("Apple sign in (implement)")} />
        </div>

        <div className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-indigo-600 font-medium">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
