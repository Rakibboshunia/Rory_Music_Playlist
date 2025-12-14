import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showReset, setShowReset] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login("demo@email.com");
    navigate("/");
  };

  const validatePassword = () => {
    const specialChar = /[!@#$%^&*]/;
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!specialChar.test(password)) {
      return "Password must contain a special character";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleResetNext = () => {
    setError("");

    if (step === 3) {
      const err = validatePassword();
      if (err) {
        setError(err);
        return;
      }
      // future: API call
      setShowReset(false);
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Welcome back!
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Enter your credentials to access your account
      </p>

      {/* LOGIN FORM */}
      <form onSubmit={handleLogin} className="space-y-5">

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
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember for 30 days
          </label>

          <button
            type="button"
            onClick={() => setShowReset(true)}
            className="text-blue-600"
          >
            Forgot password?
          </button>
        </div>

        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-medium">
          Sign Up
        </Link>
      </p>

      {/* RESET PASSWORD MODAL */}
      {showReset && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">
              Reset Password
            </h3>

            {/* STEP 1 */}
            {step === 1 && (
              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <input
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter OTP sent to email"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-3">
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <button
              onClick={handleResetNext}
              className="w-full mt-5 py-3 rounded-lg bg-blue-600 text-white"
            >
              {step === 3 ? "Change Password" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
