import { Button, Group, Header, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";

const CustomHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const logout = () => {
    setIsLoggedIn(false);
    Cookies.remove("is-logged-in");
  };

  React.useEffect(() => {
    const cookie = Cookies.get("is-logged-in");
    if (cookie === "true") {
      setIsLoggedIn(true);
    }
  }, []);

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
        {isLoggedIn ? (
          <Button color={"red"} onClick={logout}>
            Logout
          </Button>
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
