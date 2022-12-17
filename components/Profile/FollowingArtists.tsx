import React from "react";
import { Carousel } from "@mantine/carousel";
import { Title, Group, Stack, Avatar } from "@mantine/core";
import { Artist, FollowingArtists } from "../../types";
import { getCookie } from "cookies-next";

interface IFollowingArtists {
  followingArtists: FollowingArtists;
}

const FollowingArtists: React.FC<IFollowingArtists> = ({
  followingArtists,
}) => {
  const theme = getCookie("mantine-color-scheme");

  // TODO add a logic to fetch more arttists beyond the limit of the current limit
  const [followingArtistsState, setFollowingArtistsState] =
    React.useState<FollowingArtists>(followingArtists);

  return (
    <>
      <Title order={2}>Following Artists</Title>
      <Carousel
        withControls={true}
        dragFree={true}
        loop={true}
        slideSize={"20%"}
        containScroll={"trimSnaps"}
        slidesToScroll={1}
        controlsOffset={0}
        slideGap={8}
        align={"start"}
        breakpoints={[
          { maxWidth: "lg", slideSize: "25%" },
          { maxWidth: "md", slideSize: "33%" },
          { maxWidth: "sm", slideSize: "50%" },
          { maxWidth: "xs", slideSize: "100%" },
        ]}
        styles={{
          controls: {
            top: 0,
            "& button": {
              opacity: 1,
            },
            "& button:first-child": {
              background: `linear-gradient(to left, ${
                theme === "dark"
                  ? "rgba(25,20,20,0), rgba(25,20,20,0.2) 20%, rgba(25,20,20,0.5) 30%, rgba(25,20,20,0.7) 40%, rgba(25,20,20,1) 50%)"
                  : "rgba(255,255,255,0), rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,1) 50%)"
              }`,
            },
            "& button:last-child": {
              background: `linear-gradient(to right, ${
                theme === "dark"
                  ? "rgba(25,20,20,0), rgba(25,20,20,0.2) 20%, rgba(25,20,20,0.5) 30%, rgba(25,20,20,0.7) 40%, rgba(25,20,20,1) 50%)"
                  : "rgba(255,255,255,0), rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,1) 50%)"
              }`,
            },
          },
          control: {
            cursor: "pointer",
            boxShadow: "none",
            height: "75px",
            borderRadius: 0,
            border: "none",
            color: theme === "dark" ? "white" : "black",
            "& svg": {
              width: "32px",
              height: "32px",
            },

            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {followingArtistsState?.items?.map((artist: Artist, index: number) => {
          return (
            <Carousel.Slide key={index}>
              <Group key={artist.id}>
                <Avatar
                  size={75}
                  radius={50}
                  src={artist.images[0]?.url}
                  alt={`${artist.name}'s profile picture`}
                />
                <Stack spacing={"xs"}>
                  <Title order={4}>{artist.name}</Title>
                </Stack>
              </Group>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};

export default FollowingArtists;
