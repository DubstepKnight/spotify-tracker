import { SimpleGrid } from '@mantine/core';
import React from 'react';
import { AudioFeatures } from '../../types';
import Popularity from './Popularity/Popularity';
import TrackCharactertistics from './TrackFeatures/TrackFeatures';

interface ICoolData {
  currentTrack: any;
  name: string;
  audioFeatures: AudioFeatures;
  artistsTopTracks: any[];
  audioAnalysis: any;
}

const CoolData: React.FC<ICoolData> = ({
  currentTrack,
  audioFeatures,
  name,
  artistsTopTracks,
  // audioAnalysis
}) => {

  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: 300, cols: 1 },
        { minWidth: 'sm', cols: 2 },
      ]}
      cols={2}
      spacing={'xl'}
    >
      <Popularity currentTrack={currentTrack} artistsTopTracks={artistsTopTracks} />
      <TrackCharactertistics audioFeatures={audioFeatures} songName={name} />
    </SimpleGrid>
  );
};

export default CoolData;
