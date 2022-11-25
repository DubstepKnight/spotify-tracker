import { Artist } from "../types/artist";

export const getArtistsTopTracks = async (
  token: string,
  artistId: string
): Promise<Artist> => {
  try {
    // const res = await fetch(`http://192.168.1.253:3001/tracks/${trackId}?${new URLSearchParams({
    const res = await fetch(
      `http://10.101.7.9:3001/artists/${artistId}/top-tracks`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Cookie: `access-token=${token}`,
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
