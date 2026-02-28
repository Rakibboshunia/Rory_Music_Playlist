import axiosInstance from "./axiosInstance";

/* Dashboard */
export const getAdminDashboardApi = () => {
  return axiosInstance.get("/api/v1/admin/dashboard");
};

/* Users */
export const getAdminUsersApi = () => {
  return axiosInstance.get("/api/v1/admin/users");
};

export const deleteAdminUserApi = (id) => {
  return axiosInstance.delete(`/api/v1/admin/users/${id}`);
};

/* Playlists */
export const getAdminPlaylistsApi = () => {
  return axiosInstance.get("/api/v1/admin/playlists");
};

export const deleteAdminPlaylistApi = (id) => {
  return axiosInstance.delete(`/api/v1/admin/playlists/${id}`);
};

/* Update Admin Profile */
export const updateAdminProfileApi = (formData) => {
  return axiosInstance.patch("/api/v1/admin/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* Change Admin Password */
export const changeAdminPasswordApi = (data) => {
  return axiosInstance.patch("/api/v1/admin/change-password", data);
};