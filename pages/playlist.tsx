import { Center, Container, Title } from "@mantine/core";
import Cookies from "cookies";
import { GetServerSideProps, NextPage } from "next";
import Playlist from "../components/Playlist/Playlist";
import { getPlaylist } from "../requests/getPlaylist";

interface IPlaylistPage {
  playlist: any;
  error: Error;
}

const PlaylistPage: NextPage<IPlaylistPage> = ({ playlist, error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true}>
      <Center my={"xl"}>
        <Title style={{ color: "white" }}>
          Learn about your favorite tracks!
        </Title>
      </Center>
      <Playlist playlist={playlist} />
    </Container>
  );
};

export default PlaylistPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const cookies = new Cookies(req, res);

    const token = cookies.get("access-token") as string;
    const isLoggedInToken = cookies.get("is-logged-in") as string;
    const playlist = await getPlaylist(
      "0xb9d1i8oSqjvwepgejI9m?si=YEVUV_E3R_O5A3c4xRWNpA",
      token
    );
    if (!token || isLoggedInToken !== "true") {
      return {
        redirect: {
          destination: "/please_login",
          permanent: false,
        },
      };
    }
    return {
      props: {
        playlist: playlist,
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
