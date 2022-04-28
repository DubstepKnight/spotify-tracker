import { Container, Divider } from '@mantine/core';
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { CoolData, MainInfo } from '../../components';
import { getToken } from '../../requests/getToken';
import { getTrackData } from '../../requests/getTrackData';
import { getArtist } from '../../requests/getArtist';
import { getTrackAudioFeatures } from '../../requests/getTrackAudioFeatures';
import { AudioFeatures } from '../../types';

interface ITrackPage {
  trackData: any;
  artists: any;
  audioFeatures: AudioFeatures;
  error: Error;
}

const TrackPage: NextPage<ITrackPage> = ({
  trackData,
  artists,
  error,
  audioFeatures,
}) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true}>
      <MainInfo
        album={trackData.album}
        artists={artists}
        duration={trackData.duration_ms}
        explicit={trackData.explicit}
        name={trackData.name}
        audioPreview={trackData.preview_url}
      />
      <Divider my={'xl'} />
      <CoolData
        popularity={trackData.popularity}
        name={trackData.name}
        audioFeatures={audioFeatures}
      />
    </Container>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    console.time('fetch');
    const token = await getToken();
    const trackData = await getTrackData(token, params?.id as string);
    const { artists, ...track } = trackData;
    const artistPromises = artists.map((artist: any) =>
      getArtist(token, artist.id)
    );
    const detailedArtists = await Promise.all(artistPromises);
    const trackAudioFeatures = await getTrackAudioFeatures(
      token,
      params?.id as string
    );
    return {
      props: {
        trackData: track,
        artists: detailedArtists,
        audioFeatures: trackAudioFeatures,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { error } };
  }
};
