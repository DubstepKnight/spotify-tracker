import { Stack } from '@mantine/core';
import React from 'react'
import BarsChart from './BarsChart';
import BeatsChart from './BeatsChart';
import SectionsChart from './SectionsChart';
import SegmentsChart from './SegmentsChart';
import TatumsChart from './TatumsChart';

interface ITrackAnalysis {
  trackAnalysis: any;
}

const TrackAnalysis: React.FC<ITrackAnalysis> = ({ trackAnalysis }) => {
  return (
    <Stack>
      <BarsChart bars={trackAnalysis.bars} />
      <BeatsChart beats={trackAnalysis.beats} />
      <SectionsChart sections={trackAnalysis.sections} />
      <SegmentsChart segments={trackAnalysis.segments} />
      <TatumsChart tatums={trackAnalysis.tatums} />
    </Stack>
  )
}

export default TrackAnalysis;