import { IP_ADDRESS } from "../pages/_app";

export const getProfile = async (token: string) => {
  const res = await fetch(`http://${IP_ADDRESS}:3001/user/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `access-token=${token}`,
      "Access-Control-Allow-Credentials": "true",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
  console.log("res: ", res.body);
  const data = await res.json();
  console.log("data: ", data);
  return data;
};
