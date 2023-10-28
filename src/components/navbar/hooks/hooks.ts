import { useRouter } from 'next/router';

export const useNavbarHooks = () => {
  const router = useRouter();
  const pathname = router.pathname;

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
  };
};
