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
  };

  const resetQuiz = () => {
    setAnswers({});
    console.log("Quiz reset");
  };

  const submitQuiz = () => {
    console.log("Final Quiz Answers:", answers);
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