import { SimpleGrid } from '@mantine/core';
import React from 'react';
import { AudioFeatures } from '../../types';
import Popularity from './Popularity';
import TrackCharts from './TrackCharts';

interface ICoolData {
  popularity: number;
  name: string;
  audioFeatures: AudioFeatures;
}

const CoolData: React.FC<ICoolData> = ({ popularity, audioFeatures }) => {
  return (
    <SimpleGrid cols={2} spacing={'md'}>
      <Popularity popularity={popularity} />
      <TrackCharts audioFeatures={audioFeatures} />
    </SimpleGrid>
  );
};

export default CoolData;
