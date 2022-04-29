import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { AudioFeatures } from '../../../types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type ITrackRadarChart = Pick<
  AudioFeatures,
  | 'acousticness'
  | 'danceability'
  | 'energy'
  | 'instrumentalness'
  | 'liveness'
  | 'speechiness'
  | 'valence'
> & { songName: string }

const TrackRadarChart: React.FC<ITrackRadarChart> = ({
  acousticness,
  danceability,
  energy,
  instrumentalness,
  liveness,
  speechiness,
  valence,
  songName
}) => {

  const options = {
    legend: {
      position: 'top',
      labels: {
        fontColor: 'white'
      }
    },
    title: {
      display: true,
      text: songName,
      fontColor: 'white'
    },
    scales: {
      r: {
        max: 1,
        pointLabels: {
          color: 'white'
        },
        ticks: {
          backdropColor: 'transparent',
          color: 'white'
        },
        angleLines: {
          color: 'gray'
        },
        grid: {
          color: 'gray'
        }
      }
    }
  }

  const data = {
    labels: [
      'Acousticness',
      'Danceability',
      'Energy',
      'Instrumentalness',
      'Liveness',
      'Speechiness',
      'Valence',
    ],
    datasets: [
      {
        data: [
          acousticness,
          danceability,
          energy,
          instrumentalness,
          liveness,
          speechiness,
          valence,
        ],
        label: songName,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1
      },
    ],
  };

  return <Radar data={data} options={options} />;
};

export default TrackRadarChart;
