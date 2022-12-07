import {
  ActionIcon,
  Center,
  Group,
  Popover,
  RingProgress,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { InfoCircle } from "tabler-icons-react";

interface IPopularityInfo {
  popularity: number;
}

const PopularityInfo: React.FC<IPopularityInfo> = ({ popularity }) => {
  const { colorScheme } = useMantineColorScheme();
  const [progressInfo, setProgressInfo] = React.useState<boolean>(false);

  return (
    <div>
      <Group spacing={"xs"}>
        <Title order={3}>Popularity</Title>
        <Popover opened={progressInfo} position='right' width={"300px"}>
          <Popover.Target>
            <ActionIcon
              color={"gray"}
              size={"xs"}
              variant={"light"}
              onMouseEnter={() => setProgressInfo(true)}
              onMouseLeave={() => setProgressInfo(false)}
            >
              <InfoCircle strokeWidth={2} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size='sm' color={"white"}>
              The popularity of the track. The value will be between 0 and 100,
              with 100 being the most popular. The popularity of a track is a
              value between 0 and 100, with 100 being the most popular. The
              popularity is calculated by algorithm and is based, in the most
              part, on the total number of plays the track has had and how
              recent those plays are. Generally speaking, songs that are being
              played a lot now will have a higher popularity than songs that
              were played a lot in the past. Duplicate tracks (e.g. the same
              track from a single and an album) are rated independently. Artist
              and album popularity is derived mathematically from track
              popularity.
            </Text>
            <Text size='xs' mt={"md"}>
              Note: the popularity value may lag actual popularity by a few
              days: the value is not updated in real time.
            </Text>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <Center>
        <RingProgress
          label={
            <Text size='xl' weight={700} align='center'>
              {popularity}
            </Text>
          }
          size={320}
          thickness={60}
          roundCaps={true}
          sections={[
            {
              value: popularity,
              color: colorScheme === "dark" ? "white" : "green",
            },
          ]}
        />
      </Center>
    </div>
  );
};

export default PopularityInfo;
