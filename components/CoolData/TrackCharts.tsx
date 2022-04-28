import { Stack, Title } from '@mantine/core';
import React from 'react'
import { Radar } from 'react-chartjs-2';

interface ITrackCharts {
  audioFeatures: any;
}

const TrackCharts:React.FC<ITrackCharts> = ({ audioFeatures }) => {

  console.log('audioFeatures: ', audioFeatures);

  return (
    <Stack>
      <Title order={2} style={{ color: 'white' }}>
        Track characteristics
      </Title>
      {/* <Radar /> */}
    </Stack>
  )
}

export default TrackCharts;