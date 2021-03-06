import {
  ActionIcon,
  Center,
  Group,
  Popover,
  RingProgress,
  Select,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import { InfoCircle } from 'tabler-icons-react';

interface IPopularityInfo {
  popularity: number;
}

const PopularityInfo: React.FC<IPopularityInfo> = ({ popularity }) => {
  const [progressInfo, setProgressInfo] = React.useState<boolean>(false);

  return (
    <div>
      <Group spacing={'xs'} >
        <Title order={3} style={{ color: 'white' }}>
          Popularity
        </Title>
        <Popover
          opened={progressInfo}
          position='right'
          placement='center'
          styles={{ body: { color: 'white' } }}
          width={'300px'}
          target={
            <ActionIcon
              color={'gray'}
              size={'xs'}
              variant={'light'}
              onMouseEnter={() => setProgressInfo(true)}
              onMouseLeave={() => setProgressInfo(false)}
            >
              <InfoCircle strokeWidth={2} />
            </ActionIcon>
          }
        >
          <Text size='sm'>
            The popularity of the track. The value will be between 0 and 100,
            with 100 being the most popular. The popularity of a track is a
            value between 0 and 100, with 100 being the most popular. The
            popularity is calculated by algorithm and is based, in the most
            part, on the total number of plays the track has had and how recent
            those plays are. Generally speaking, songs that are being played a
            lot now will have a higher popularity than songs that were played a
            lot in the past. Duplicate tracks (e.g. the same track from a single
            and an album) are rated independently. Artist and album popularity
            is derived mathematically from track popularity.
          </Text>
          <Text size='xs' mt={'md'} color={'gray'}>
            Note: the popularity value may lag actual popularity by a few days:
            the value is not updated in real time.
          </Text>
        </Popover>
      </Group>
      <Center>
        <RingProgress
          label={
            <Text
              size='xl'
              weight={700}
              align='center'
              color={'white'}
            >
              {popularity}
            </Text>
          }
          size={320}
          thickness={60}
          roundCaps={true}
          sections={[{ value: popularity, color: 'white' }]}
        />
      </Center>
    </div>
  );
};

export default PopularityInfo;
