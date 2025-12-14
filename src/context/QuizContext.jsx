import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({
    eventType: "",
    eventDetails: "",
    genres: [],
    email: "",
  });

  const updateAnswer = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <QuizContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);
