import { Outlet } from "react-router-dom";

export default function QuizPage() {

  return (
    <div className="min-h-screen py-12">

      {/* ===== STEP CONTENT ===== */}
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <Outlet />
      </div>

    </div>
  );
}
