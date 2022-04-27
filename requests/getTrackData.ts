type AccessToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const getTrackData = async (token: AccessToken) => {
  const res = await fetch(`${process.env.SPOTIFY_BASE_URL}/tracks/2TmqHjg7uhizGndzXQdFuf`, {
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