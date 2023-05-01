import type { NextPage } from "next";

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <div className="flex gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_80px)]">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-blue-500">
        Next.js Template
      </h1>
    </div>
  );
};

export default Home;
