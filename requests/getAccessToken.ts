import { IP_ADDRESS } from "../pages/_app";

export const getAccessToken = async (
  state: string,
  code: string
): Promise<{ jwt: string; expires_in: number }> => {
  const res = await fetch(
    `http://${IP_ADDRESS}:3001/auth/request_access_token?state=${state}&code=${code}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  const { jwt, expires_in } = await res.json();
  return { jwt, expires_in };
};
