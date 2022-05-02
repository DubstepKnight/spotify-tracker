import { ActionIcon, Group, Popover, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { InfoCircle } from 'tabler-icons-react';

interface IFeatureBlock {
  name: string;
  value: number;
  description: string;
}

const FeatureBlock: React.FC<IFeatureBlock> = ({ name, value, description }) => {

  const [progressInfo, setProgressInfo] = React.useState<boolean>(false);

  return (
    <Stack spacing={'xl'}>
      <Group spacing={'xs'} >
        <Title order={3} style={{ color: 'lightgray' }} align={'left'}>
          {name}
        </Title>
        <Popover
          opened={progressInfo}
          position='right'
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
          <Text size='sm' >
            {description}
          </Text>
        </Popover>
      </Group>
      <Title order={4} style={{ color: ' white' }} align={'center'}>
        {value}
      </Title>
    </Stack>
  );
};

export default FeatureBlock;
