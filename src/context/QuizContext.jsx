import { createContext, useContext, useState } from "react";

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const updateAnswer = (key, value) => {
  setAnswers((prev) => {
    const updated = {
      ...prev,
      [key]: value,
    };

    return updated;
  });

  toast.info("Answer updated");
};

const resetQuiz = () => {
  setAnswers({});

  toast.info("Quiz has been reset");
};

const submitQuiz = () => {

  toast.success("Quiz submitted successfully");
};

  return (
    <QuizContext.Provider
      value={{
        answers,
        updateAnswer,
        submitQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);