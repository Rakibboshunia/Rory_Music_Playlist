import { Outlet, useLocation } from "react-router-dom";

export default function QuizPage() {

  return (
    <div className="bg-white">

      {/* ===== STEP CONTENT ===== */}
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <Outlet />
      </div>

    </div>
  );
}
