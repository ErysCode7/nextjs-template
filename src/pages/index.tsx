import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_80px)]">
      <div className="relative h-[70px] w-[250px]  md:h-[300px] mobile:w-[300px]">
        <Image src={'/next.svg'} alt="next image" fill />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-blue-500">
        Template
      </h1>
    </div>
  );
};

export default Home;

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
