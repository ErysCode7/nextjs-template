import type { NextPage } from "next";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHooks } from "./hooks";

type Props = {};

const NavLinks: NextPage = () => {
  const { router, routes, pathname } = useHooks();

  return (
    <>
      {routes.map((route) => {
        return (
          <li
            onClick={() => router.push(route.routes)}
            key={route.id}
            className={`lg:cursor-pointer text-gray-500 hover:text-blue-500 lg:mt-0 h-20 flex items-center justify-center w-full text-center ${
              pathname === route.routes ? "bg-gray-100 lg:bg-transparent" : null
            }`}
          >
            {route.route}
          </li>
        );
      })}
    </>
  );
};

const Navbar: NextPage<Props> = () => {
  const { showMobileNavbar, setShowMobileNavbar } = useHooks();

  return (
    <nav className="w-full h-20 shadow-sm bg-white">
      <div className="flex items-center justify-between m-auto h-full w-[90%] lg:w-[85%]">
        <div>
          <h2 className="text-base md:text-xl lg:text-3xl text-blue-500 font-bold">
            Next.js Template
          </h2>
        </div>

        {/* MOBILE TO 1023px */}
        <ul
          className={`absolute w-60 sm:w-96 z-50 ${
            showMobileNavbar ? "left-0" : "left-[-999px]"
          } top-0 bottom-0 transition-all duration-500 lg:hidden bg-white shadow-md flex flex-col items-center`}
        >
          <NavLinks />
        </ul>

        {/* 1024px UP */}
        <ul className="hidden lg:flex items-center gap-4">
          <NavLinks />
        </ul>

        <div
          className="lg:hidden"
          onClick={() =>
            setShowMobileNavbar((prevMobileNavbar) => !prevMobileNavbar)
          }
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
