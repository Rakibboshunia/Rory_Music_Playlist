import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // ✅ ONLY ANSWERS (no scores)
  const [answers, setAnswers] = useState({});

  // ✅ SIMPLE ANSWER UPDATE
  const updateAnswer = (key, value) => {
    setAnswers(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  // ✅ FINAL SUBMIT (console log all answers)
  const submitQuiz = () => {
    console.log("QUIZ SUBMITTED — ALL ANSWERS:");
    console.log(answers);
  };

  return (
    <QuizContext.Provider value={{ answers, updateAnswer, submitQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
