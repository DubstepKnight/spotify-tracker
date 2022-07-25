export const getAccessToken = async (state: string, code: string) => {
  try {
    const res = await fetch(`http://192.168.1.253:3001/auth/request_access_token?state=${state}&code=${code}`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};