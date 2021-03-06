import { AccessToken } from '../types';

export const getTrackAudioAnalysis = async (token: AccessToken, trackId: string) => {
  const res = await fetch(`${process.env.SPOTIFY_BASE_URL}/audio-analysis/${trackId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization':
        'Bearer ' + token.access_token
    }
  });
  const data = await res.json();
  return data;
}