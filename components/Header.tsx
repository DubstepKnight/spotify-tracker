import { Button, Group, Header, Loader, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface ICustomHeader {
  isLoggedIn: boolean;
  isLoading: boolean;
}

const CustomHeader: React.FC<ICustomHeader> = ({ isLoggedIn, isLoading }) => {
  return (
    <Header height={60} p='md' className='glassy-background'>
      <Group position='apart'>
        <Link href={"/"} passHref>
          <a>
            <Title order={2} style={{ color: "white" }}>
              Ört!
            </Title>
          </a>
        </Link>
        {isLoading ? (
          <Button variant='light' color={"gray"}>
            <Loader color={"green"} size={"sm"} variant={"bars"} />
          </Button>
        ) : isLoggedIn ? (
          <Link href={"/me"} passHref={true}>
            <Button variant='light' color={"gray"}>
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
    </Header>
  );
};

export default CustomHeader;
