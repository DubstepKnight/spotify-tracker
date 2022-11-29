import { Container, Text } from "@mantine/core";
import Cookies from "cookies";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { getProfile } from "../requests/getProfile";
import { Profile } from "../types";
// import Playlist from '../components/Playlist/Playlist';
// import { getPlaylist } from '../requests/getPlaylist';
// import { getToken } from '../requests/getToken';

interface IProfile {
  profile: Profile;
  error: Error;
}

const Profile: NextPage<IProfile> = ({ profile, error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true}>
      <Text color='white'> Brother, your email: {profile.email} </Text>
    </Container>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);

  const token = cookies.get("access-token") as string;
  const profile = await getProfile(token);

  try {
    return {
      props: {
        profile: profile,
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
