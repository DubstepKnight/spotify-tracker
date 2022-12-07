import {
  ActionIcon,
  Button,
  Group,
  Header,
  Loader,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { MoonStars, Sun } from "tabler-icons-react";

interface ICustomHeader {
  isLoggedIn: boolean;
  // isLoading: boolean;
}

const CustomHeader: React.FC<ICustomHeader> = ({ isLoggedIn }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height={60} p='md' className='glassy-background'>
      <Group position='apart'>
        <Link href={"/"} passHref>
          <a>
            <Title order={2}>Ört!</Title>
          </a>
        </Link>
        <Group>
          <ActionIcon
            variant='outline'
            color={"gray"}
            size={"lg"}
            radius={"sm"}
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === "dark" ? <Sun /> : <MoonStars />}
          </ActionIcon>
          {isLoggedIn ? (
            <Link href={"/profiles/me"} passHref={true}>
              <Button variant='outline' color={"gray"}>
                Profile
              </Button>
            </Link>
          ) : (
            <a
              href={"http://localhost:3001/auth/login"}
              rel={"noreferrer noopener"}
              target={"_blank"}
            >
              <Button color={"green"}>Login</Button>
            </a>
          )}
        </Group>
      </Group>
    </Header>
  );
};

export default CustomHeader;
