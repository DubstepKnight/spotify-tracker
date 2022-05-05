import { Title } from '@mantine/core';
import React from 'react'

interface ISectionsChart {
  sections: any;
}

const SectionsChart: React.FC<ISectionsChart> = ({ sections }) => {

  console.log('sections: ', sections)

  return (
    <div>
      <Title> Sections </Title>
    </div>
  )
}

export default SectionsChart;