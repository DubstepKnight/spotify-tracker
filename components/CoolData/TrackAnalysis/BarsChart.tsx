import { Title } from '@mantine/core';
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from '../../../types/audioAnalysis';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface IBarsChart {
  bars: Bar[];
}

const BarsChart: React.FC<IBarsChart> = ({ bars }) => {

  const data = {
    labels: bars.map((bar: Bar) => bar.start),
    datasets: [
      {
        label: 'Bars',
        data: bars.map((bar: Bar) => bar.confidence),
        borderColor: 'rgb(0,128,0)',
        backgroundColor: 'rgba(0,128,0, 0.5)',
        yAxisID: 'y',
      },
    ],
  };

  return (
    <div>
      <Title> Bars </Title>
      <Line data={data} />
    </div>
  );
};

export default BarsChart;
