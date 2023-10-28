import React from 'react';
import { useNavbarHooks } from '../hooks/hooks';

const NavLinks = () => {
  const { router, routes, pathname } = useNavbarHooks();

  return (
    <React.Fragment>
      {routes.map(route => {
        return (
          <li
            onClick={() => router.push(route.routes)}
            key={route.id}
            className={`lg:cursor-pointer text-gray-500 hover:text-blue-500 lg:mt-0 h-20 flex items-center justify-center w-full text-center ${
              pathname === route.routes ? 'bg-gray-100 lg:bg-transparent' : null
            }`}
          >
            {route.route}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default NavLinks;
