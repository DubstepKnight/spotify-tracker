import { Center, Container, Title } from "@mantine/core";
// import Cookies from "cookies";
import { GetServerSideProps, NextPage } from "next";
// import Playlist from "../components/Playlist/Playlist";
// import { getPlaylist } from "../requests/getPlaylist";
interface IHome {
  playlist: any;
  error: Error;
}

const Home: NextPage<IHome> = ({ error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true}>
      <Center my={"xl"}>
        <Title style={{ color: "white" }}>
          Please Login to get all the interesting info!
        </Title>
      </Center>
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({}) => {
  try {
    return {
      props: {
        // playlist: playlist,
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
