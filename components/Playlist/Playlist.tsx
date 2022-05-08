import {
  Card,
  Divider,
  Group,
  Image,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';

interface IPlaylist {
  playlist: any;
}

const Playlist: React.FC<IPlaylist> = ({ playlist }) => {
  const [searchInput, setSearchInput] = React.useState<string>('');

  return (
    <Card>
      <Stack>
        <Group spacing={'lg'}>
          <Image
            src={playlist?.images[0]?.url}
            width={200}
            height={200}
            alt={`${playlist?.name} playlist image`}
          />
          <Stack spacing={'sm'}>
            <Title order={1} style={{ color: 'white' }}>
              {playlist?.name}
            </Title>
            <Text weight={700} color={'white'}>
              {playlist?.owner?.display_name}
            </Text>
            <Text weight={400} size={'sm'} color={'white'}>
              {playlist?.description}
            </Text>
          </Stack>
        </Group>
      </Stack>
      <Divider my={'lg'} />
      <TextInput
        color='green'
        value={searchInput}
        onChange={(event) => setSearchInput(event.currentTarget.value)}
        placeholder={'E.g. Nightcall'}
        radius={'xl'}
        mb={'md'}
      />
      <ScrollArea offsetScrollbars={true} style={{ height: 650 }}>
        <Stack spacing={'xs'}>
          {playlist.tracks.items
            .filter((item: any) => {
              if (searchInput) {
                return (
                  item.track?.name
                    .toLowerCase()
                    .indexOf(searchInput?.toLowerCase()) > 0
                );
              }
              return 1;
            })
            .map((item: any) => {
              return (
                <Group
                  key={item.track.id}
                  sx={(theme) => ({
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    '&:hover': {
                      backgroundColor: theme.colors.gray[8],
                    },
                  })}
                >
                  <Image
                    src={item.track?.album.images[2]?.url}
                    width={item.track?.album.images[2]?.width}
                    height={item.track?.album.images[2]?.height}
                    alt={`${item.track?.name} playlist image`}
                  />
                  <Stack spacing={'xs'}>
                    <Link href={`/tracks/${item.track.id}`}>
                      <a>
                        <Title
                          order={5}
                          sx={(theme) => ({
                            color: theme.colors.gray[0],
                            '&:hover': {
                              color: theme.colors.primary[1],
                            },
                          })}
                        >
                          {item.track?.name}
                        </Title>
                      </a>
                    </Link>
                    <Group>
                      {item.track?.artists.map((artist: any) => (
                        <Group key={artist.id}>
                          <Text weight={400} size={'xs'} color={'white'}>
                            {artist.name}
                          </Text>
                        </Group>
                      ))}
                    </Group>
                  </Stack>
                </Group>
              );
            })}
        </Stack>
      </ScrollArea>
    </Card>
  );
};

export default Playlist;
