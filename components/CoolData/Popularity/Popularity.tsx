import {
  Grid,
} from '@mantine/core';
import React from 'react';
import PopularityInfo from './PopularityInfo';
import PopularityTable from './PopularityTable';

interface IPopularity {
  artists: any[];
  currentTrack: any;
  artistsTopTracks: any[];
}

const Popularity: React.FC<IPopularity> = ({
  currentTrack,
  artistsTopTracks,
  artists
}) => {
return (
    <Grid justify={'space-between'} gutter={'xl'} >
      <Grid.Col sm={4}>
        <PopularityInfo popularity={currentTrack.popularity} />
      </Grid.Col>
      <Grid.Col sm={8}>
        <PopularityTable
          artists={artists}
          currentTrack={currentTrack}
          artistsTopTracks={artistsTopTracks}
        />
      </Grid.Col>
    </Grid>
  );
};

export default Popularity;
