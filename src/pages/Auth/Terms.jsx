import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Policy
      </h1>

      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>
          This is a demo Terms & Policy page. The content here is for
          placeholder purposes only.
        </p>
        <p>
          By using this platform, you agree to comply with all applicable
          laws and regulations. You are responsible for maintaining the
          confidentiality of your account credentials.
        </p>
        <p>
          We may collect basic user information to improve your experience.
          Your data will never be sold or shared with third parties without
          your consent.
        </p>
        <p>
          The service is provided "as is" without warranties of any kind.
          We reserve the right to update these terms at any time.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-full bg-blue-600 text-white"
        >
          Back
        </button>
      </div>
    </div>
  );
}
