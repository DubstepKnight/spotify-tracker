import { Container, Space, Text } from "@mantine/core";
import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import { CoolData, MainInfo } from "../../components";
import { getTrackData } from "../../requests/getTrackData";
import { getArtists } from "../../requests/getArtists";
import { getTrackAudioFeatures } from "../../requests/getTrackAudioFeatures";
import { AudioFeatures } from "../../types";
import { getArtistsTopTracks } from "../../requests/getArtistsTopTracks";
import Cookies from "cookies";
import { getTrackAudioAnalysis } from "../../requests/getTrackAudioAnalysis";
import { AudioAnalysis } from "../../types/audioAnalysis";

interface ITrackPage {
  token: string;
  trackData: any;
  // audioFeatures: AudioFeatures;
  error: Error;
  artistsTopTracks: any[];
  audioAnalysis?: any;
  artists: any[];
}

const TrackPage: NextPage<ITrackPage> = ({
  token,
  trackData,
  artists,
  error,
  // audioFeatures,
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
      <Space h={"lg"} />
      <CoolData
        token={token}
        artists={artists}
        currentTrack={trackData}
        name={trackData.name}
        // audioFeatures={audioFeatures}
        artistsTopTracks={artistsTopTracks}
      />
    </Container>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  try {
    console.time("getServerSideProps");
    const cookies = new Cookies(req, res);
    const token = cookies.get("access-token") as string;
    const isLoggedInToken = cookies.get("is-logged-in") as string;
    if (!token || isLoggedInToken !== "true") {
      return {
        redirect: {
          destination: "/please_login",
          permanent: false,
        },
      };
    }
    const trackData = await getTrackData(token, params?.id as string);
    const { artists, ...track } = trackData;
    const artistsIds = artists.map((artist: any) => artist.id);
    const detailedArtists = await getArtists(token, artistsIds);
    const artistsTopTracksPromises = artists?.map((artist: any) =>
      getArtistsTopTracks(token, artist.id)
    );
    const artistsTopTracks = await Promise.all(artistsTopTracksPromises);
    // const trackAudioFeatures = await getTrackAudioFeatures(
    //   token,
    //   params?.id as string
    // );
    console.timeEnd("getServerSideProps");
    return {
      props: {
        token: token,
        trackData: track,
        artists: detailedArtists.artists,
        // audioFeatures: trackAudioFeatures,
        artistsTopTracks: artistsTopTracks,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { error } };
  }
};
