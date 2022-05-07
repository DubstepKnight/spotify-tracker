import { Chip, Chips, Table, Title } from '@mantine/core';
import styles from './PopularityTable.module.css';
import React from 'react';
import Link from 'next/link';

interface IPopularityTable {
  artistsTopTracks: any[];
  currentTrack: any;
  artists: any[];
}

const PopularityTable: React.FC<IPopularityTable> = ({
  currentTrack,
  artistsTopTracks,
  artists,
}) => {
  const [isInTopTen, setIsInTopTen] = React.useState<boolean>(false);
  const [currentArtist, setCurrentArtist] = React.useState<string>('0');

  React.useEffect(() => {
    setIsInTopTen(
      artistsTopTracks[0].tracks.find((topTrack: any) => {
        return topTrack.id === currentTrack.id;
      })
    );
  }, [artistsTopTracks, currentTrack.id]);

  return (
    <div>
      <Title order={3} style={{ color: 'white' }}>
        Top 10 tracks
      </Title>
      <Chips
        color={'green'}
        value={currentArtist}
        onChange={setCurrentArtist}
        multiple={false}
        my={'lg'}
      >
        {artists.map((artist: any, index: number) => {
          return (
            <Chip value={'' + index} key={artist.id}>
              {artist.name}
            </Chip>
          );
        })}
      </Chips>
      <Table striped highlightOnHover verticalSpacing={'sm'}>
        <thead>
          <tr>
            <th> # </th>
            <th> Track </th>
            <th style={{ textAlign: 'end' }}> Popularity index </th>
          </tr>
        </thead>
        <tbody>
          {artistsTopTracks[+currentArtist].tracks.map(
            (topTrack: any, index: number) => {
              console.log('topTrack: ', topTrack);
              return (
                <tr
                  key={topTrack?.id}
                  className={
                    topTrack?.id === currentTrack.id
                      ? styles.this_track
                      : styles.track
                  }
                >
                  <td> {index + 1} </td>
                  <td>
                    <Link href={`${topTrack.id}`}>
                      <a>{topTrack?.name}</a>
                    </Link>
                  </td>
                  <td>
                    <strong> {topTrack?.popularity} </strong>
                  </td>
                </tr>
              );
            }
          )}
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
    </div>
  );
};

export default PopularityTable;
