import { Anchor, Button, Center, Container, Space, Title } from "@mantine/core";
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
        <Title>Please Login to get all the interesting info!</Title>
      </Center>
      <Center>
        <a
          href={"http://localhost:3001/auth/login"}
          rel={"noreferrer noopener"}
          target={"_blank"}
        >
          <Button color={"green"}>Login</Button>
        </a>
      </Center>
      <Space h={250} />
      <Container py={"xl"} color='white' fluid={true}>
        <Center>
          <Title>
            Test playlist&nbsp;
            <Link href={"/playlists/4dEifCIVdKU1V9gsmWk0Wx"} passHref>
              <Anchor color={"green"}>here</Anchor>
            </Link>
          </Title>
        </Center>
      </Container>
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
