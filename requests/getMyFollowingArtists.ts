import { IP_ADDRESS } from "../pages/_app";

export const getMyFollowingArtists = async (token: string): Promise<any> => {
  const urlParams = new URLSearchParams({
    type: "artist",
    limit: "50",
  });
  try {
    const res = await fetch(
      `http://${IP_ADDRESS}:3001/user/me/following?${urlParams}`,
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
    return data.artists;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
