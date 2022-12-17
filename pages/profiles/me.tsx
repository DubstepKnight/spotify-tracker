import {
  Avatar,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Cookies from "cookies";
import ClientCookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { getMyProfile } from "../../requests/getMyProfile";
import { getMyFollowingArtists } from "../../requests/getMyFollowingArtists";
import { FollowingArtists, OwnProfile } from "../../types";
import { FollowingArtists as FollowingArtistsComponent } from "../../components";

interface IProfile {
  profile: OwnProfile;
  followingArtists: FollowingArtists;
  error: Error;
}

const MePage: NextPage<IProfile> = ({ profile, followingArtists, error }) => {
  const router = useRouter();
  console.log("followingArtists.next", followingArtists.next);

  if (error) {
    return <div>{error.message}</div>;
  }

  const logout = () => {
    ClientCookies.remove("is-logged-in");
    router.reload();
  };

  return (
    <Container fluid={true}>
      <Flex align={"center"} justify='apart'>
        <Group>
          <Avatar
            size={75}
            radius={50}
            src={profile.images[0]?.url}
            color={profile.product === "premium" ? "green" : "gray"}
            alt={`${profile.display_name}'s profile picture`}
            styles={{
              root:
                profile.product === "premium"
                  ? { border: "4px solid green", boxShadow: "0 0 15px green" }
                  : { border: "4px solid gray", boxShadow: "0 0 15px gray" },
            }}
          />
          <Stack spacing={"xs"}>
            <Title order={4}>{profile.display_name}</Title>
            <Text size={"sm"}>
              {profile.id} | {profile.email}
            </Text>
          </Stack>
          {/* <Stack>
            <Text> Followers: {profile.followers.total} </Text>
            <Text> Country: {profile.country} </Text>
          </Stack> */}
        </Group>
      </Flex>
      <Divider my={"lg"} />
      <Stack spacing={"lg"}>
        <FollowingArtistsComponent followingArtists={followingArtists} />
      </Stack>
      <Divider my={"lg"} />
      <Text mb={"lg"}>This will log you out of this app</Text>
      <Button size='md' color={"red"} onClick={logout}>
        Logout
      </Button>
    </Container>
  );
};

export default MePage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);

  const token = cookies.get("access-token") as string;
  const isLoggedInToken = cookies.get("is-logged-in") as string;
  const profile = await getMyProfile(token);
  const followingArtists = await getMyFollowingArtists(token);
  console.log("followingArtists", followingArtists);

  if (isLoggedInToken !== "true" && token) {
    cookies.set("access-token", "");
  }

  if (!token || isLoggedInToken !== "true") {
    return {
      redirect: {
        destination: "/please_login",
        permanent: false,
      },
    };
  }

  try {
    return {
      props: {
        profile: profile,
        followingArtists: followingArtists,
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
