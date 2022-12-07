import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { AudioFeatures } from "../../../types";
import { useMantineColorScheme } from "@mantine/core";

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
  | "acousticness"
  | "danceability"
  | "energy"
  | "instrumentalness"
  | "liveness"
  | "speechiness"
  | "valence"
> & { songName: string };

const TrackRadarChart: React.FC<ITrackRadarChart> = ({
  acousticness,
  danceability,
  energy,
  instrumentalness,
  liveness,
  speechiness,
  valence,
  songName,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const options = {
    legend: {
      position: "top",
      labels: {
        fontColor: colorScheme === "dark" ? "white" : "black",
      },
    },
    title: {
      display: true,
      text: songName,
      fontColor: colorScheme === "dark" ? "white" : "black",
    },
    scales: {
      r: {
        max: 1,
        pointLabels: {
          color: colorScheme === "dark" ? "white" : "black",
        },
        ticks: {
          backdropColor: "transparent",
          color: colorScheme === "dark" ? "white" : "black",
        },
        angleLines: {
          color: "gray",
        },
        grid: {
          color: "gray",
        },
      },
    },
  };

  const data = {
    labels: [
      "Acousticness",
      "Danceability",
      "Energy",
      "Instrumentalness",
      "Liveness",
      "Speechiness",
      "Valence",
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
        backgroundColor: "green",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default TrackRadarChart;
