import { Table } from '@mantine/core';
import React from 'react';

interface IPopularityTable {
  artistsTopTracks: any[];
  currentTrack: any;
}

const PopulartiyTable: React.FC<IPopularityTable> = ({
  currentTrack,
  artistsTopTracks,
}) => {
  const isInTopTen: boolean = artistsTopTracks[0].tracks.find(
    (topTrack: any) => {
      return topTrack.id === currentTrack.id;
    }
  );

  return (
    <Table striped highlightOnHover verticalSpacing={'sm'}>
      <thead>
        <tr>
          <th> # </th>
          <th> Track </th>
          <th> Popularity index </th>
        </tr>
      </thead>
      <tbody>
        {artistsTopTracks[0].tracks.map((topTrack: any, index: number) => {
          return (
            <tr
              key={topTrack?.id}
              style={
                topTrack?.id === currentTrack.id
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'inherit' }
              }
            >
              <td> {index + 1} </td>
              <td> {topTrack?.name} </td>
              <td> {topTrack?.popularity} </td>
            </tr>
          );
        })}
        {!isInTopTen && (
          <tr key={currentTrack?.id} style={{ backgroundColor: 'green' }}>
            <td> ? </td>
            <td> {currentTrack?.name} </td>
            <td> {currentTrack?.popularity} </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default PopulartiyTable;
