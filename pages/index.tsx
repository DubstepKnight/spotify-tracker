import { Container } from '@mantine/core';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container fluid={true}>
      This is the index page!
    </Container>
  );
};

export default Home;