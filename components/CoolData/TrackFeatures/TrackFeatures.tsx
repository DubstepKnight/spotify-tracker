import { Grid, SimpleGrid, Skeleton, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import { getTrackAudioFeatures } from "../../../requests/getTrackAudioFeatures";
import { AudioFeatures } from "../../../types";
import FeatureBlock from "./FeatureBlock";
import TrackRadarChart from "./TrackRadarChart";

const KEY_DESCRIPTION =
  "The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.";
const LOUDNESS_DESCRIPTION =
  "The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.";
const MODE_DESCRIPTION =
  "Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.";
const TEMPO_DESCRIPTION =
  "The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.";

interface ITrackFeatures {
  token: string;
  songName: string;
}

const TrackFeatures: React.FC<ITrackFeatures> = ({ token, songName }) => {
  const router = useRouter();
  const [audioFeatures, setAudioFeatures] = React.useState<AudioFeatures>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const query = router.query;
    const fetchTrackFeatures = async () => {
      const trackAnalysis = await getTrackAudioFeatures(
        token,
        query.id as string
      );
      setAudioFeatures(trackAnalysis);
      setIsLoading(false);
    };
    fetchTrackFeatures();
  }, [router.query, token]);

  if (isLoading) {
    return (
      <Stack spacing={"xl"}>
        <Title order={2}>Track features</Title>
        <Grid align='flex-start' gutter={"xl"} mb={"xl"}>
          <Grid.Col md={10}>
            <Skeleton height={500} radius='lg' />
          </Grid.Col>
          <Grid.Col md={2}>
            <SimpleGrid
              spacing={"xl"}
              breakpoints={[
                { maxWidth: 1000, cols: 4 },
                { maxWidth: 600, cols: 3 },
                { maxWidth: 500, cols: 2 },
              ]}
            >
              <Skeleton height={100} radius='lg' />
              <Skeleton height={100} radius='lg' />
              <Skeleton height={100} radius='lg' />
              <Skeleton height={100} radius='lg' />
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Stack>
    );
  }
  if (audioFeatures) {
    return (
      <Stack spacing={"xl"}>
        <Title order={2}>Track features</Title>
        <Grid align='flex-start' gutter={"xl"} mb={"xl"}>
          <Grid.Col md={10}>
            <TrackRadarChart {...audioFeatures} songName={songName} />
          </Grid.Col>
          <Grid.Col md={2}>
            <SimpleGrid
              spacing={"xl"}
              breakpoints={[
                { maxWidth: 1000, cols: 4 },
                { maxWidth: 600, cols: 3 },
                { maxWidth: 500, cols: 2 },
              ]}
            >
              {audioFeatures?.key && (
                <FeatureBlock
                  value={audioFeatures?.key}
                  name={"Key"}
                  description={KEY_DESCRIPTION}
                />
              )}
              {audioFeatures?.loudness && (
                <FeatureBlock
                  value={audioFeatures?.loudness}
                  name={"Loudness"}
                  description={LOUDNESS_DESCRIPTION}
                />
              )}
              {audioFeatures?.mode && (
                <FeatureBlock
                  value={audioFeatures?.mode}
                  name={"Mode"}
                  description={MODE_DESCRIPTION}
                />
              )}
              {audioFeatures?.tempo && (
                <FeatureBlock
                  value={audioFeatures?.tempo}
                  name={"Tempo"}
                  description={TEMPO_DESCRIPTION}
                />
              )}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Stack>
    );
  } else {
    return (
      <Stack spacing='md'>
        <Title order={3}>{songName}</Title>
        <Text>No audio features found</Text>
      </Stack>
    );
  }
};

export default TrackFeatures;
