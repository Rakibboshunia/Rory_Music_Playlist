import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8FF]">
      <div className=" bg-white rounded-2xl shadow-xl p-25 text-center max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-green-600">
          Payment Successful 🎉
        </h2>

        <p className="text-gray-500 mt-2">
          Your payment was completed successfully.
        </p>

        <button
          onClick={() => navigate("/playlist")}
          className="
            mt-6 w-full py-3 rounded-xl
            bg-linear-to-r from-[#9810FA] to-[#155DFC]
            text-white font-medium
            transition-all duration-300 ease-out
            hover:scale-[1.03] 
            hover:shadow-xl active:scale-[0.98]
            hover:from-[#7C0FD8]
            hover:to-[#0F4CD6]
            cursor-pointer
            "
        >
          Go to Playlist
        </button>
      </div>
    </div>
  );
}
