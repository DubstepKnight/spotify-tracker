import { ActionIcon, Group, Popover, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { InfoCircle } from "tabler-icons-react";

interface IFeatureBlock {
  name: string;
  value: number;
  description: string;
}

const FeatureBlock: React.FC<IFeatureBlock> = ({
  name,
  value,
  description,
}) => {
  const [progressInfo, setProgressInfo] = React.useState<boolean>(false);

  return (
    <Stack
      spacing={"xl"}
      sx={(theme) => ({
        border: `1px solid ${theme.colors.gray[5]}`,
        borderRadius: "8px",
        padding: "8px 12px",
      })}
    >
      <Group spacing={"xs"} align={"flex-start"}>
        <Title order={5} align={"left"}>
          {name}
        </Title>
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
            <Text size='sm'>{description}</Text>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <Title order={4} align={"left"}>
        {value}
      </Title>
    </Stack>
  );
};

export default FeatureBlock;
