import axiosInstance from "./axiosInstance";

/* Guest playlist by quiz ID */
export const getGuestPlaylistApi = (id) => {
  return axiosInstance.get(`/api/v1/playlists/guest/playlist/${id}`);
};

/* Authenticated user playlists */
export const getUserPlaylistsApi = () => {
  return axiosInstance.get("/api/v1/playlists/user/playlist");
};

/* Upgrade playlist */
export const upgradePlaylistApi = (data) => {
  return axiosInstance.post("/api/v1/playlists/upgrade", data);
};