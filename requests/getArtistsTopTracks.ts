type AccessToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const getArtistsTopTracks = async (token: AccessToken, artistId: string) => {
  const res = await fetch(`${process.env.SPOTIFY_BASE_URL}/artists/${artistId}/top-tracks?market=FI`, {
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