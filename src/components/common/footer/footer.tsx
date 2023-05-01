import type { NextPage } from "next";

type Props = {};

const Footer: NextPage<Props> = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full h-20 shadow-sm bg-white absolute bottom-0">
      <div className="flex items-center  m-auto h-full w-[90%] lg:w-[85%]">
        <h2 className="text-gray-500 text-xs sm:text-base">
          Nextjs Template <span className="text-blue-500">©{date}.</span> All
          rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
