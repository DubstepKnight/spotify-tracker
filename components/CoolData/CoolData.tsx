import { Tabs } from '@mantine/core';
import React from 'react';
import { AudioFeatures } from '../../types';
import Popularity from './Popularity/Popularity';
import TrackAnalysis from './TrackAnalysis/TrackAnalysis';
import TrackFeatures from './TrackFeatures/TrackFeatures';

interface ICoolData {
  markets: any;
  currentTrack: any;
  name: string;
  audioFeatures: AudioFeatures;
  artistsTopTracks: any[];
  audioAnalysis: any;
}

const CoolData: React.FC<ICoolData> = ({
  // markets,
  currentTrack,
  audioFeatures,
  name,
  artistsTopTracks,
  audioAnalysis
}) => {

  return (
    <Tabs color={'gray'} >
      <Tabs.Tab label={'Popularity'} >
        <Popularity currentTrack={currentTrack} artistsTopTracks={artistsTopTracks} />
      </Tabs.Tab>
      <Tabs.Tab label={'Track Features'} >
        <TrackFeatures audioFeatures={audioFeatures} songName={name} />
      </Tabs.Tab>
      {/* <Tabs.Tab label={'Track Analysis'} >
        <TrackAnalysis trackAnalysis={audioAnalysis} />
      </Tabs.Tab> */}
    </Tabs>
  );
};

export default CoolData;
