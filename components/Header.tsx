import {
  ActionIcon,
  Group,
  Header,
  Title,
} from '@mantine/core';
import React from 'react';

const CustomHeader = () => {  

  return (
    <Header height={60} p='md'>
      <Group position='apart'>
        <Title
          order={2}
          style={{ color: 'white' }}
        >
          Spotify Track Checker
        </Title>
      </Group>
    </Header>
  );
};

export default CustomHeader;
