import { Title } from '@mantine/core';
import React from 'react'

interface ITatumsChart {
  tatums: any;
}

const TatumsChart: React.FC<ITatumsChart> = ({ tatums }) => {

  console.log('tatums: ', tatums)

  return (
    <div>
      <Title> Segments </Title>
    </div>
  )
}

export default TatumsChart;