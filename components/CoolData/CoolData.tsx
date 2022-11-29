import { Tabs } from "@mantine/core";
import React from "react";
import { AccessToken, AudioFeatures } from "../../types";
import Popularity from "./Popularity/Popularity";
import TrackAnalysis from "./TrackAnalysis/TrackAnalysis";
import TrackFeatures from "./TrackFeatures/TrackFeatures";

interface ICoolData {
  token: string;
  artists: any[];
  currentTrack: any;
  name: string;
  audioFeatures: AudioFeatures;
  artistsTopTracks: any[];
}

const CoolData: React.FC<ICoolData> = ({
  token,
  currentTrack,
  audioFeatures,
  name,
  artistsTopTracks,
  artists,
}) => {
  return (
    <Tabs color={"gray"}>
      <Tabs.Tab label={"Popularity"}>
        <Popularity
          artists={artists}
          currentTrack={currentTrack}
          artistsTopTracks={artistsTopTracks}
        />
      </Tabs.Tab>
      <Tabs.Tab label={"Track Features"}>
        <TrackFeatures audioFeatures={audioFeatures} songName={name} />
      </Tabs.Tab>
      <Tabs.Tab label={"Track Analysis"}>
        <TrackAnalysis token={token} />
      </Tabs.Tab>
    </Tabs>
  );
};

export default CoolData;
