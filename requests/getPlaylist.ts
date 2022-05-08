import { AccessToken } from '../types';

export const getPlaylist = async (
  token: AccessToken,
  playlistId: string,
) => {
  const res = await fetch(
    `${process.env.SPOTIFY_BASE_URL}/playlists/${playlistId}?${new URLSearchParams({
      fields: 'images,desctiption,images,name,tracks(name,artists,href,album(name,images,))'
    })}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Bearer ' + token.access_token,
      },
    }
  );
  const data = await res.json();
  return data;
};
