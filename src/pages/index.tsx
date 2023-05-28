import { Home } from '@/modules/home';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

type Props = {};

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  //NEXT-AUTH SSR SAMPLE

  // if (!session) {
  //   return {
  //     props: { session },
  //     redirect: {
  //       destination: '/todos',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};
