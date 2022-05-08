export const getToken = async () => {
  try {
    const base64 = Buffer.from(
      process.env.SPOTIFY_API_CLIENT_ID + ':' + process.env.SPOTIFY_API_SECRET
    ).toString('base64');
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization':
          'Basic ' + base64
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials'
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
