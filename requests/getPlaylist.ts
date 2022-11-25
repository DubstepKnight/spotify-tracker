export const getPlaylist = async (playlistId: string, token?: string) => {
  try {
    // const res = await fetch(`http://192.168.1.253:3001/playlists/${playlistId}`, {
    const res = await fetch(`http://10.101.7.9:3001/playlists/${playlistId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `access-token=${token}`,
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
