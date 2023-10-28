import { Products } from '@/modules/products';
import { useProductsApi } from '@/services/products/axios/products-api';

import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  isError: boolean;
};

const ProductsPage: NextPage<Props> = ({ isError }) => {
  if (isError) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl">Error</h1>
      </div>
    );
  }

  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  /* eslint-disable */
  const { axiosGetProducts } = useProductsApi();

  let isError = false;
  let params = '';

  try {
    await queryClient.fetchQuery({
      queryKey: ['products', params],
      queryFn: () => axiosGetProducts(params),
    });
  } catch (err) {
    isError = true;
  }

  return {
    props: {
      //also passing down isError state to show a custom error component.
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
