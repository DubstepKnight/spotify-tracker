import { IP_ADDRESS } from "../pages/_app";
import { Artist } from "../types/artist";

export const getArtistsTopTracks = async (
  token: string,
  artistId: string
): Promise<Artist> => {
  try {
    const res = await fetch(
      `http://${IP_ADDRESS}:3001/artists/${artistId}/top-tracks`,
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
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
