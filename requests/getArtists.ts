import { IP_ADDRESS } from "../pages/_app";

export const getArtists = async (token: string, artistIds: string[]) => {
  try {
    const res = await fetch(
      `http://${IP_ADDRESS}:3001/artists/${artistIds.join(",")}`,
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
    return error;
  }
};
