import axiosInstance from "./axiosInstance";

/* ================= LOGIN ================= */
export const loginUser = async (data) => {
  const response = await axiosInstance.post(
    "/api/v1/auth/login",
    data
  );

  return response.data;
};

/* ================= REGISTER ================= */
export const registerUser = async (data) => {
  const response = await axiosInstance.post(
    "/api/v1/auth/register",
    data
  );

  return response.data;
};

/* ================= LOGOUT ================= */
export const logoutUser = async () => {
  const response = await axiosInstance.post(
    "/api/v1/auth/logout"
  );

  return response.data;
};