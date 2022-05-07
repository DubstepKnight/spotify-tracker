import { Tabs } from '@mantine/core';
import React from 'react';
import { AccessToken, AudioFeatures } from '../../types';
import Popularity from './Popularity/Popularity';
import TrackFeatures from './TrackFeatures/TrackFeatures';

interface ICoolData {
  artists: any[];
  currentTrack: any;
  name: string;
  audioFeatures: AudioFeatures;
  artistsTopTracks: any[];
}

const CoolData: React.FC<ICoolData> = ({
  currentTrack,
  audioFeatures,
  name,
  artistsTopTracks,
  artists
}) => {
  return (
    <Tabs color={'gray'}>
      <Tabs.Tab label={'Popularity'}>
        <Popularity
          artists={artists}
          currentTrack={currentTrack}
          artistsTopTracks={artistsTopTracks}
        />
      </Tabs.Tab>
      <Tabs.Tab label={'Track Features'}>
        <TrackFeatures audioFeatures={audioFeatures} songName={name} />
      </Tabs.Tab>
    </Tabs>
  );
};

export default CoolData;
