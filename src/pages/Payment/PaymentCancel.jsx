import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8FF]">
      <div className="bg-white rounded-2xl shadow-xl p-25 text-center max-w-md w-full">
        <h2 className="text-2xl font-semibold text-red-500">
          Payment Cancelled ❌
        </h2>

        <p className="text-gray-500 mt-2">
          Your payment was not completed.
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="
            mt-6 w-full py-3 rounded-xl
            bg-linear-to-r from-[#9810FA] to-[#155DFC]
            text-white font-medium
            transition-all duration-300 ease-out
            hover:scale-[1.03] cursor-pointer
            hover:shadow-xl
            hover:from-[#7C0FD8]
            hover:to-[#0F4CD6]
            active:scale-[0.98]
            "
        >
          Back to Quiz
        </button>
      </div>
    </div>
  );
}
