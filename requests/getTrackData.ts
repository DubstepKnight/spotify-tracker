import { AccessToken } from '../types';

export const getTrackData = async (
  token: AccessToken,
  trackId: string,
) => {
  const res = await fetch(
    `${process.env.SPOTIFY_BASE_URL}/tracks/${trackId}?${new URLSearchParams({
      market: 'FI'
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
