import axiosInstance from "./axiosInstance";

export const registerApi = (data) => {
  return axiosInstance.post("/api/v1/auth/register", data);
};

export const loginApi = (data) => {
  return axiosInstance.post("/api/v1/auth/login", data);
};

export const forgotPasswordApi = (data) => {
  return axiosInstance.post("/api/v1/auth/forgot-password", data);
};

export const verifyOtpApi = (data) => {
  return axiosInstance.post("/api/v1/auth/verify-otp", data);
};

export const resetPasswordApi = (data) => {
  return axiosInstance.post("/api/v1/auth/reset-password", data);
};















// import axiosInstance from "./axiosInstance";

// /* ================= LOGIN ================= */
// export const loginUser = async (data) => {
//   const response = await axiosInstance.post(
//     "/api/v1/auth/login",
//     data
//   );

//   return response.data;
// };

// /* ================= REGISTER ================= */
// export const registerUser = async (data) => {
//   const response = await axiosInstance.post(
//     "/api/v1/auth/register",
//     data
//   );

//   return response.data;
// };

// /* ================= LOGOUT ================= */
// export const logoutUser = async () => {
//   const response = await axiosInstance.post(
//     "/api/v1/auth/logout"
//   );

//   return response.data;
// };

