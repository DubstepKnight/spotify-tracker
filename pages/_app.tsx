import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Header } from "../components";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import NextNProgress from "nextjs-progressbar";

export const IP_ADDRESS = "10.101.7.9"; // office IP address
// const PORT = '192.168.1.253'; // home IP address

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logout = () => {
    setIsLoggedIn(false);
    Cookies.remove("is-logged-in");
  };

  useEffect(() => {
    const cookie = Cookies.get("is-logged-in");
    if (cookie === "true") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      <NextNProgress
        color='#1DB954'
        startPosition={0.3}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            colors: {
              primary: ["#1DB954", "#1ED760"],
              backgroundColor: ["#ffffff", "#191414"],
            },
          }}
        >
          <Head>
            <title> Spotify song data visualizer </title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <AppShell
            padding={"md"}
            fixed={true}
            header={<Header logout={logout} isLoggedIn={isLoggedIn} />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.backgroundColor[1]
                    : theme.colors.backgroundColor[0],
              },
            })}
          >
            <Container size={"xl"} px={0}>
              <Component {...pageProps} key={router.asPath} />
            </Container>
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
