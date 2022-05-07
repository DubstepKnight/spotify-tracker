import { Group, Header, Title } from '@mantine/core';
import React from 'react';

const CustomHeader = () => {
  return (
    <Header height={60} p='md' className='glassy-background'>
      <Group position='apart'>
        <Title order={2} style={{ color: 'white' }}>
          Spotifire!
        </Title>
      </Group>
    </Header>
  );
};

export default CustomHeader;
