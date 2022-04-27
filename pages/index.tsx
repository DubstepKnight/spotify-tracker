import { Container, Divider } from '@mantine/core';
import type { NextPage } from 'next';
import { MainInfo, CoolData } from '../components';
import { getToken } from '../requests/getToken';
import { getTrackData } from '../requests/getTrackData';

interface IHome {
  data: any;
  error: Error;
}

const Home: NextPage<IHome> = ({ data, error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true}>
      <MainInfo
        album={data.album}
        artists={data.artists}
        duration={data.duration_ms}
        explicit={data.explicit}
        name={data.name}
        audioPreview={data.preview_url}
      />
      <Divider my={'lg'} />
      <CoolData popularity={data.popularity} name={data.name} />
    </Container>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    const token = await getToken();
    console.log('token: ', token);
    const trackData = await getTrackData(token);
    console.log('trackData: ', trackData);
    return { props: { data: trackData } };
  } catch (error) {
    console.error(error);
    return { props: { error } };
  }
};
