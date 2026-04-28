import { Outlet } from "react-router-dom";

export default function QuizPage() {

  return (
    <div className="min-h-screen pt-4 pb-12 sm:py-12">

      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <Outlet />
      </div>

    </div>
  );
}
