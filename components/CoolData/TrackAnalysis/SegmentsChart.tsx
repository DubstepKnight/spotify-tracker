import { Title } from '@mantine/core';
import React from 'react'

interface ISegmentsChart {
  segments: any;
}

const SegmentsChart: React.FC<ISegmentsChart> = ({ segments }) => {

  return (
    <div>
      <Title> Segments </Title>
    </div>
  )
}

export default SegmentsChart;