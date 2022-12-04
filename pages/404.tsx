import { Center, Container, Stack, Text, Title } from "@mantine/core";

const Custom404 = () => {
  return (
    <Container>
      <Center>
        <Stack align={"center"}>
          <Title order={1} color={"white"}>
            404
          </Title>
          <Text color={"white"}> The page is not found </Text>
        </Stack>
      </Center>
    </Container>
  );
};

export default Custom404;
