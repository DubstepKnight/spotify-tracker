export const getAccessToken = async (
  state: string,
  code: string
): Promise<{ jwt: string; expires_in: number }> => {
  // const res = await fetch(
  //   `http://192.168.1.253:3001/auth/request_access_token?state=${state}&code=${code}`,
  const res = await fetch(
    `http://10.101.7.9:3001/auth/request_access_token?state=${state}&code=${code}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const { jwt, expires_in } = await res.json();
  return { jwt, expires_in };
};
