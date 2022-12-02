import {
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Header,
  Image,
  Navbar,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Cookies from "cookies";
import ClientCookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { getMyProfile } from "../requests/getMyProfile";
import { Profile } from "../types";

interface IProfile {
  profile: Profile;
  error: Error;
}

const MePage: NextPage<IProfile> = ({ profile, error }) => {
  const router = useRouter();

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
          <Image
            height={65}
            width={65}
            radius={50}
            src={profile.images[0].url}
            alt={`${profile.display_name}'s profile picture`}
          />
          <Stack spacing={"xs"}>
            <Title order={4} color={"white"}>
              {profile.display_name}
            </Title>
            <Text size={"sm"} color={"gray.4"}>
              {profile.id} | {profile.email}
            </Text>
          </Stack>
        </Group>
      </Flex>
      <Divider my={"lg"} />
      <Stack spacing={"lg"}>
        <Text color={"white"}> Followers: {profile.followers.total} </Text>
        <Text color={"white"}> Country: {profile.country} </Text>
      </Stack>
      <Divider my={"lg"} />
      <Text color={"gray.1"} mb={"lg"}>
        This will log you out of this app
      </Text>
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
