import { IP_ADDRESS } from "../pages/_app";

export const getPlaylist = async (playlistId: string, token?: string) => {
  try {
    const res = await fetch(
      `http://${IP_ADDRESS}:3001/playlists/${playlistId}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Credentials": "true",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      }
    );
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
