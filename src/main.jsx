import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

import { QuizProvider } from "./context/QuizContext";
import { AuthProvider } from "./context/AuthContext";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QuizProvider>
      <AudioPlayerProvider>
        <RouterProvider router={router} />
      </AudioPlayerProvider>
    </QuizProvider>
  </AuthProvider>
);
