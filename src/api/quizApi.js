import axiosInstance from "./axiosInstance";

export const submitGuestQuizApi = (data) => {
  return axiosInstance.post("/api/v1/quiz/guest/submit", data);
};

export const submitUserQuizApi = (data) => {
  return axiosInstance.post("/api/v1/quiz/user/submit", data);
};