import { useRouter } from 'next/router';
import { useState } from 'react';

export const useHooks = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const routes = [
    {
      id: 'HOME',
      route: 'Home',
      routes: '/',
    },
    {
      id: 'TODOS',
      route: 'Todos',
      routes: '/todos',
    },
    {
      id: 'PRODUCTS',
      route: 'Products',
      routes: '/products',
    },
  ];

  return {
    routes,
    router,
    pathname,
    showMobileNavbar,
    setShowMobileNavbar,
  };
};
