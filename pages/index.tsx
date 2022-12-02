import { Button, Center, Container, Title } from "@mantine/core";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
interface IHome {
  error: Error;
}

const Home: NextPage<IHome> = ({ error }) => {
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container fluid={true}>
      <Center my={"xl"}>
        <Title style={{ color: "white" }}>
          Please Login to get all the interesting info!
        </Title>
      </Center>
      <Center>
        <Link href='/login' passHref={true}>
          <Button color='blue'>Login</Button>
        </Link>
      </Center>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({}) => {
  try {
    return {
      props: {
        code: "nothing",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error,
      },
    };
  }
};
