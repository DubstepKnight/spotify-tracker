import { Tabs } from "@mantine/core";
import React from "react";
import Popularity from "./Popularity/Popularity";
import TrackFeatures from "./TrackFeatures/TrackFeatures";

interface ICoolData {
  token: string;
  artists: any[];
  currentTrack: any;
  name: string;
  artistsTopTracks: any[];
}

const CoolData: React.FC<ICoolData> = ({
  token,
  currentTrack,
  name,
  artistsTopTracks,
  artists,
}) => {
  return (
    <Tabs
      color={"green"}
      defaultValue={"popularity"}
      radius={"lg"}
      keepMounted={true}
      styles={{ panel: { marginTop: "0.5rem" } }}
    >
      <Tabs.List>
        <Tabs.Tab value='popularity'>Popularity</Tabs.Tab>
        <Tabs.Tab value='track-features'>Track Features</Tabs.Tab>
        <Tabs.Tab value='track-analysis'>Track Analysis</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={"popularity"}>
        <Popularity
          artists={artists}
          currentTrack={currentTrack}
          artistsTopTracks={artistsTopTracks}
        />
      </Tabs.Panel>
      <Tabs.Panel value={"track-features"}>
        <TrackFeatures token={token} songName={name} />
      </Tabs.Panel>
      {/* <Tabs.Panel value={"track-analysis"}>
        <TrackAnalysis token={token} />
      </Tabs.Panel> */}
    </Tabs>
  );
};

export default CoolData;
