import { Container, Space } from '@mantine/core';
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { CoolData, MainInfo } from '../../components';
import { getToken } from '../../requests/getToken';
import { getTrackData } from '../../requests/getTrackData';
import { getArtist } from '../../requests/getArtist';
import { getTrackAudioFeatures } from '../../requests/getTrackAudioFeatures';
import { AudioFeatures } from '../../types';
import { getArtistsTopTracks } from '../../requests/getArtistsTopTracks';

interface ITrackPage {
  trackData: any;
  audioFeatures: AudioFeatures;
  error: Error;
  artistsTopTracks: any[];
  audioAnalysis?: any;
  artists: any[];
}

const TrackPage: NextPage<ITrackPage> = ({
  trackData,
  artists,
  error,
  audioFeatures,
  artistsTopTracks,
}) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true} px={0}>
      <MainInfo
        album={trackData.album}
        artists={artists}
        duration={trackData.duration_ms}
        explicit={trackData.explicit}
        name={trackData.name}
        audioPreview={trackData.preview_url}
      />
      <Space h={'lg'} />
      <CoolData
        artists={artists}
        currentTrack={trackData}
        name={trackData.name}
        audioFeatures={audioFeatures}
        artistsTopTracks={artistsTopTracks}
      />
    </Container>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}) => {
  try {
    const token = await getToken();
    const trackData = await getTrackData(token, params?.id as string);
    const { artists, ...track } = trackData;
    const artistPromises = artists?.map((artist: any) =>
      getArtist(token, artist.id)
    );
    const artistsTopTracksPromises = artists?.map((artist: any) =>
      getArtistsTopTracks(token, artist.id)
    );
    const detailedArtists = await Promise.all(artistPromises);
    const artistsTopTracks = await Promise.all(artistsTopTracksPromises);
    const trackAudioFeatures = await getTrackAudioFeatures(
      token,
      params?.id as string
    );
    return {
      props: {
        trackData: track,
        artists: detailedArtists,
        audioFeatures: trackAudioFeatures,
        artistsTopTracks: artistsTopTracks,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { error } };
  }
};
