import { Group, Stack, Title } from '@mantine/core';
import React from 'react';
import { AudioFeatures } from '../../../types';
import FeatureBlock from './FeatureBlock';
import TrackRadarChart from './TrackRadarChart';

const KEY_DESCRIPTION =
  'The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.';
const LOUDNESS_DESCRIPTION =
  'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.';
const MODE_DESCRIPTION =
  'Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.';
const TEMPO_DESCRIPTION =
  'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.';

interface ITrackCharts {
  audioFeatures: AudioFeatures;
  songName: string;
}

const TrackCharacteristics: React.FC<ITrackCharts> = ({
  audioFeatures,
  songName,
}) => {

  return (
    <Stack spacing={'xl'} >
      <Title order={2} style={{ color: 'white' }} >
        Track characteristics
      </Title>
      <Group position='apart' mb={'xl'} >
        {audioFeatures.key && (
          <FeatureBlock value={audioFeatures?.key} name={'Key'} description={KEY_DESCRIPTION} />
        )}
        {audioFeatures.loudness && (
          <FeatureBlock value={audioFeatures?.loudness} name={'Loudness'} description={LOUDNESS_DESCRIPTION} />
        )}
        {audioFeatures.mode && (
          <FeatureBlock value={audioFeatures?.mode} name={'Mode'} description={MODE_DESCRIPTION} />
        )}
        {audioFeatures.tempo && (
          <FeatureBlock value={audioFeatures?.tempo} name={'Tempo'} description={TEMPO_DESCRIPTION} />
        )}
      </Group>
      <TrackRadarChart {...audioFeatures} songName={songName} />
    </Stack>
  );
};

export default TrackCharacteristics;