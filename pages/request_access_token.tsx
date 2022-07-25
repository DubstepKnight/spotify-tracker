import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { getAccessToken } from '../requests/getAccessToken';

interface INice {
  code: string;
  state: string;
}

const RequestAccessToken: NextPage<INice> = () => {  

  // React.useEffect(() => {
  //   fetch(`http://localhost:3001`).then((res) => {
  //     const data = res.text();
  //     console.log('data: ', data);
  //   }).catch((err) => {
  //     console.error(err);
  //   });
  // }, [])
  

  return <div>RequestAccessToken</div>;
};

export default RequestAccessToken;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { code, state } = query;
    const response = await getAccessToken(state as string, code as string);
    return {
      props: {
        code: code,
        state: state
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
