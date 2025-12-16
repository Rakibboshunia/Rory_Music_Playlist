
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup("demo@email.com");
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* TITLE – TOP CENTER */}
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
            className="w-full border rounded-lg px-4 py-3"
            placeholder="Create a password"
            required
          />
        </div>

        {/* Terms & Policy */}
        <div className="flex items-start gap-2 text-sm">
          <input type="checkbox" required className="mt-1" />
          <span>
            I agree to the{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Policy
            </span>
          </span>
        </div>

        {/* SIGN UP BUTTON */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium"
        >
          Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="text-sm text-center mt-4">
          Have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
