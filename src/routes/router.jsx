import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import QuizLayout from "../layouts/QuizLayout";
import PlaylistLayout from "../layouts/PlaylistLayout";

// Pages
import Home from "../pages/Home/Home";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Step1 from "../pages/Quiz/Step1_EventType";
import Step2 from "../pages/Quiz/Step2_EventDetails";
import Step3 from "../pages/Quiz/Step3_Genres";
import Step4 from "../pages/Quiz/Step4_EmailCapture";
import Step5 from "../pages/Quiz/Step5_UpgradePopup";
import Completed from "../pages/Quiz/Completed";
import PlaylistResult from "../pages/Playlist/PlaylistResult";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: "/", element: <Home /> },
        ]
      },

      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          { path: "signup", element: <Signup /> },
          { path: "login", element: <Login /> },
        ],
      },

      {
        path: "/quiz",
        element: <QuizLayout />,
        children: [
          { path: "step-1", element: <Step1 /> },
          { path: "step-2", element: <Step2 /> },
          { path: "step-3", element: <Step3 /> },
          { path: "email", element: <Step4 /> },
          { path: "upgrade", element: <Step5 /> },
          { path: "completed", element: <Completed /> },
        ],
      },

      {
        path: "/playlist",
        element: <PlaylistLayout />,
        children: [
          { path: ":id", element: <PlaylistResult /> },
        ],
      },
    ],
  },
]);

export default router;
