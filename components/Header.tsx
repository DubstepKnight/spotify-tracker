import { Button, Group, Header, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const CustomHeader = () => {
  return (
    <Header height={60} p='md' className='glassy-background'>
      <Group position='apart'>
        <Link href={'/'} passHref>
          <a>
            <Title order={2} style={{ color: 'white' }}>
              Spotifire!
            </Title>
          </a>
        </Link>
        <a
          href={'http://localhost:3001/auth/login'}
          rel={'noreferrer noopener'}
          target={'_blank'}
        >
          <Button color={'green'}>Login</Button>
        </a>
      </Group>
    </Header>
  );
};

export default CustomHeader;
