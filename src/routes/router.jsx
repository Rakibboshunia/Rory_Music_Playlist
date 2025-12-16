import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import QuizLayout from "../layouts/QuizLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import PlaylistResult from "../pages/Playlist/PlaylistResult";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Step1_EventType from "../pages/Quiz/Step1_EventType";
import Step2_EventDetails from "../pages/Quiz/Step2_EventDetails";
import Step3_Genres from "../pages/Quiz/Step3_Genres";
import Step4_EmailCapture from "../pages/Quiz/Step4_EmailCapture";
import Step5_FinalQuestion from "../pages/Quiz/Step5_FinalQuestion";


const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/quiz",
        element: <QuizLayout />,
        children: [
          { index: true, element: <Step1_EventType /> },
          { path: "details", element: <Step2_EventDetails /> },
          { path: "genres", element: <Step3_Genres /> },
          { path: "importance", element: <Step4_EmailCapture /> },
          { path: "final", element: <Step5_FinalQuestion /> },
        ],
      },

      { path: "/playlist", element: <PlaylistResult /> },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
