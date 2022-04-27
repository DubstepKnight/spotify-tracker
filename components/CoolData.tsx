import {
  ActionIcon,
  Group,
  Popover,
  Progress,
  Stack,
  Title,
} from '@mantine/core';
import React from 'react';
import { InfoCircle } from 'tabler-icons-react';

interface ICoolData {
  popularity: number;
  name: string;
}

const CoolData: React.FC<ICoolData> = ({ popularity, name }) => {
  const [progressInfo, setProgressInfo] = React.useState<boolean>(false);

  return (
    <Stack>
      <Group spacing={'xs'}>
        <Title order={2} style={{ color: 'white' }}>
          Popularity
        </Title>
        <Popover
          opened={progressInfo}
          position='right'
          placement='center'
          styles={{ body: { color: 'white' }  }}
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
          Bro, you are very popular, bro!
        </Popover>
      </Group>
      <Progress
        color={'green'}
        value={popularity}
        radius='lg'
        size={'lg'}
        label={name}
      />
    </Stack>
  );
};

export default CoolData;
