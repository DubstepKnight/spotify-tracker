import { Avatar, Badge, Group, Image, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { millisecondsToTime } from '../utils';

interface IMainInfo {
  album: any;
  artists: any[];
  name: string;
  explicit: boolean;
  duration: number;
  audioPreview: string;
}

const MainInfo: React.FC<IMainInfo> = ({
  album,
  artists,
  name,
  explicit,
  duration,
  audioPreview,
}) => {
  const { url, height, width } = album.images[1];

  console.log('artists: ', artists);

  return (
    <Group position='left'>
      <Image
        alt={`${album.name}'s album cover`}
        src={url}
        width={width}
        height={height}
      />
      <Stack spacing={'xs'} justify={'flex-end'}>
        <Text color={'white'}> SONG </Text>
        <Title order={1} style={{ fontSize: '48px', color: 'white' }}>
          {name}
        </Title>
        <Group>
          {artists.map((artist) => (
            <Group spacing={'xs'} key={artist.id}>
              <Avatar
                radius={'xl'}
                size={'sm'}
                alt={`${artist.name}'s picture`}
                src={artist?.images[2].url}
              />
              <Text weight={700} color={'white'}>
                {artist.name}
              </Text>
            </Group>
          ))}
        </Group>
        <Group spacing={'xs'}>
          <Text size='sm' color={'white'}>
            {album.release_date.slice(0, 4)}
          </Text>
          <Text color={'white'}> • </Text>
          <Text size='sm' color={'white'}>
            {millisecondsToTime(duration)}
          </Text>
        </Group>
        {explicit ? (
          <Badge
            style={{ width: 'fit-content' }}
            color='green'
            fullWidth={true}
            variant='outline'
          >
            Explicit
          </Badge>
        ) : null}
        <audio controls>
          <source src={audioPreview} type={'audio/mpeg'} />
        </audio>
      </Stack>
    </Group>
  );
};

export default MainInfo;
