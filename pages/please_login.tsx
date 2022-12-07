import { Text } from "@mantine/core";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

const PleaseLogin: NextPage = () => {
  return <Text>Please login for the love of God</Text>;
};

export default PleaseLogin;

export const getServerSideProps: GetServerSideProps = async () => {
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
