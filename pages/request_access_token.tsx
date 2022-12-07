import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { getAccessToken } from "../requests/getAccessToken";
import Cookies from "cookies";

const RequestAccessToken: NextPage = () => {
  return <div>RequestAccessToken</div>;
};

export default RequestAccessToken;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  try {
    const { code, state } = query;
    const { jwt, expires_in } = await getAccessToken(
      state as string,
      code as string
    );

    const cookies = new Cookies(req, res);

    cookies.set("access-token", jwt, {
      httpOnly: true,
      expires: new Date(new Date().getTime() + 1000 * expires_in),
    });

    cookies.set("is-logged-in", "true", {
      httpOnly: false,
      expires: new Date(new Date().getTime() + 1000 * expires_in),
    });
    return {
      redirect: {
        destination: "/profiles/me",
        permanent: false,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error,
      },
    };
  }
};
