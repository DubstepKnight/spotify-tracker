import { Title } from '@mantine/core';
import React from 'react'

interface IBeatsChart {
  beats: any;
}

const BeatsChart: React.FC<IBeatsChart> = ({ beats }) => {

  return (
    <div>
      <Title> Beats </Title>
    </div>
  )
}

export default BeatsChart;