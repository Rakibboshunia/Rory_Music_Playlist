import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({
    E: 50,
    M: 50,
    G: 50,
    L: 50,
    N: 50,
  });

  const updateAnswer = (key, value, scoreDelta = {}) => {
    setAnswers(prev => ({ ...prev, [key]: value }));

    if (Object.keys(scoreDelta).length) {
      setScores(prev => ({
        E: prev.E + (scoreDelta.E || 0),
        M: prev.M + (scoreDelta.M || 0),
        G: prev.G + (scoreDelta.G || 0),
        L: prev.L + (scoreDelta.L || 0),
        N: prev.N + (scoreDelta.N || 0),
      }));
    }
  };

  return (
    <QuizContext.Provider value={{ answers, scores, updateAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
