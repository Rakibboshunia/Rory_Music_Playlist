import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import QuizLayout from "../layouts/QuizLayout";
import AuthLayout from "../layouts/AuthLayout";

// Pages
import Home from "../pages/Home/Home";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import VerifyOTP from "../pages/Auth/VerifyOTP";

// ✅ Policies
import Terms from "../pages/Policies/Terms";
import PrivacyPolicy from "../pages/Policies/PrivacyPolicy";
import CookiePolicy from "../pages/Policies/CookiePolicy";
import RefundPolicy from "../pages/Policies/RefundPolicy";

// Quiz steps
import Step1_EventType from "../pages/Quiz/components/Step1_EventType";
import Step2_EventDetails from "../pages/Quiz/components/Step2_EventDetails";
import Step3_Genres from "../pages/Quiz/components/Step3_Genres";
import Step4_MusicImportance from "../pages/Quiz/components/Step4_MusicImportance";
import Step5_Vibe from "../pages/Quiz/components/Step5_Vibe";
import Step6_Mood from "../pages/Quiz/components/Step6_Mood";
import Step7_Energy from "../pages/Quiz/components/Step7_Energy";
import Step8_Tempo from "../pages/Quiz/components/Step8_Tempo";
import Step9_Era from "../pages/Quiz/components/Step9_Era";
import Step10_Final from "../pages/Quiz/components/Step10_Final";

// 🎵 Playlist
import UserPlaylistResult from "../pages/Playlist/UserPlaylistResult";
import GuestPlaylistResult from "../pages/Playlist/PlaylistResult";

// 💳 Payment
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Payment/PaymentCancel";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },

      /* ============= QUIZ ============== */
      {
        path: "/quiz",
        element: <QuizLayout />,
        children: [
          { index: true, element: <Step1_EventType /> },
          { path: "details", element: <Step2_EventDetails /> },
          { path: "genres", element: <Step3_Genres /> },
          { path: "importance", element: <Step4_MusicImportance /> },
          { path: "vibe", element: <Step5_Vibe /> },
          { path: "mood", element: <Step6_Mood /> },
          { path: "energy", element: <Step7_Energy /> },
          { path: "tempo", element: <Step8_Tempo /> },
          { path: "era", element: <Step9_Era /> },
          { path: "final", element: <Step10_Final /> },
        ],
      },

      /* ============ PLAYLIST =========== */
      {
        path: "/playlist",
        element: <UserPlaylistResult />,
      },
      {
        path: "/playlist/:id",
        element: <GuestPlaylistResult />,
      },

      /* ============= PAYMENT ============= */
      {
        path: "/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/cancel",
        element: <PaymentCancel />,
      },

      /* ============ POLICIES ============= */
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
    ],
  },

  /* ============= AUTH ============== */
  {
    element: <AuthLayout />,
    children: [
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/verify-otp", element: <VerifyOTP /> },
    ],
  },
]);

export default router;
