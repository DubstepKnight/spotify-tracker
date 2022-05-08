import { Center, Container, Title } from '@mantine/core';
import { GetServerSideProps, NextPage } from 'next';
import Playlist from '../components/Playlist/Playlist';
import { getPlaylist } from '../requests/getPlaylist';
import { getToken } from '../requests/getToken';

interface IHome {
  playlist: any;
  error: Error;
}

const Home: NextPage<IHome> = ({ playlist, error }) => {

  if (error) {
    return (
      <div>
        {error.message}
      </div>
    )
  }

  return (
    <Container fluid={true}>
      <Center my={'xl'} >
        <Title style={{ color: 'white' }} >
          Learn about your favorite tracks!
        </Title>
      </Center>
      <Playlist playlist={playlist} />
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({}) => {
  try {
    const token = await getToken();
    const playlist = await getPlaylist(
      token,
      '0xb9d1i8oSqjvwepgejI9m?si=YEVUV_E3R_O5A3c4xRWNpA'
    );
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
