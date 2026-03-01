import axiosInstance from "./axiosInstance";


export const getGuestPlaylistApi = (id) => {
  return axiosInstance.get(`/api/v1/playlists/guest/playlist/${id}`);
};


export const getUserPlaylistsApi = () => {
  return axiosInstance.get("/api/v1/playlists/user/playlist");
};


export const upgradePlaylistApi = ({ quizId, playlistId }) => {
  console.log("Upgrade Payload:", { quizId, playlistId });

  return axiosInstance.post("/api/v1/playlists/upgrade", {
    quizId,   
    playlistId, 
  });
};