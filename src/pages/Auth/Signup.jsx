import React, { useState } from "react";
import AuthInput from "./components/AuthInput";
import GradientButton from "../../components/GradientButton";
import Divider from "./components/Divider";
import SocialButton from "./components/SocialButton";
import { signup } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", agree: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.agree) return setError("You must accept terms & policy.");
    setLoading(true);
    try {
      // placeholder api call, replace with real backend
      await signup({ name: form.name, email: form.email, password: form.password });
      navigate("/auth/login");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Get Started Now</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Name"
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          placeholder="Enter your name"
        />
        <AuthInput
          label="Email address"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
          placeholder="Enter your email"
          type="email"
        />
        <AuthInput
          label="Password"
          value={form.password}
          onChange={(v) => setForm((s) => ({ ...s, password: v }))}
          placeholder="Enter password"
          type="password"
        />

        <div className="flex items-center gap-2 text-sm">
          <input
            id="agree"
            type="checkbox"
            checked={form.agree}
            onChange={(e) => setForm((s) => ({ ...s, agree: e.target.checked }))}
            className="w-4 h-4 rounded border-gray-300"
          />
          <label htmlFor="agree" className="text-gray-600">
            I agree to the <span className="text-indigo-600">terms & policy</span>
          </label>
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <GradientButton text={loading ? "Signing up..." : "Signup"} full type="submit" />

        <Divider label="or" />

        <div className="flex gap-3">
          <SocialButton provider="google" onClick={() => alert("Google sign in (implement)")} />
          <SocialButton provider="apple" onClick={() => alert("Apple sign in (implement)")} />
        </div>

        <div className="text-center text-sm text-gray-600 mt-4">
          Have an account?{" "}
          <Link to="/auth/login" className="text-indigo-600 font-medium">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
