import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

import CookieBanner from "./components/CookieBanner";
import { QuizProvider } from "./context/QuizContext";
import { AuthProvider } from "./context/AuthContext";
import { AudioPlayerProvider } from "./context/AudioPlayerContext"; 
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QuizProvider>
      <AudioPlayerProvider>
        <>
          <RouterProvider router={router} />
          <CookieBanner />
        </>
      </AudioPlayerProvider>
    </QuizProvider>
    <Toaster />
  </AuthProvider>
);
