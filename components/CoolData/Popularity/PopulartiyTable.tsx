import { Table } from '@mantine/core';
import styles from './PopularityTable.module.css'
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
          <th style={{ textAlign: 'end' }}> Popularity index </th>
        </tr>
      </thead>
      <tbody>
        {artistsTopTracks[0].tracks.map((topTrack: any, index: number) => {
          return (
            <tr
              key={topTrack?.id}
              className={topTrack?.id === currentTrack.id ? styles.this_track : styles.track}
            >
              <td> {index + 1} </td>
              <td> {topTrack?.name} </td>
              <td>
                <strong> {topTrack?.popularity} </strong>
              </td>
            </tr>
          );
        })}
        {!isInTopTen && (
          <tr key={currentTrack?.id} className={styles.this_track}>
            <td> ? </td>
            <td> {currentTrack?.name} </td>
            <td>
              <strong> {currentTrack?.popularity} </strong>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default PopulartiyTable;
