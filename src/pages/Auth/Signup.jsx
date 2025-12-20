import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        "http://172.252.13.97:8011/api/v1/auth/users/register",
        { name, email, password }
      );

      toast.success(res.data?.message || "Signup successful!");
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
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
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
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
          <input
            type="password"
            name="password"
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Create a password"
            required
          />
        </div>

        {/* TERMS */}
        <div className="flex items-start gap-2 text-sm">
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
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium"
        >
          Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="text-md text-center mt-4">
          Have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
