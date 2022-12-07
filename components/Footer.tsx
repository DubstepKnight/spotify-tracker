import { Footer, Text } from "@mantine/core";
import React from "react";

const CustomFooter: React.FC = () => {
  return (
    <Footer height={60} p='md'>
      <Text> Application footer </Text>
    </Footer>
  );
};

export default CustomFooter;
