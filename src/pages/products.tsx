import { Products } from '@/modules/products';
import { UseProductsApi } from '@/services/products/axios/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {};

const ProductsPage: NextPage<Props> = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  const { axiosGetProducts } = UseProductsApi();

  let params = '';

  //axios
  await queryClient.prefetchQuery({
    queryKey: ['products', params],
    queryFn: () => axiosGetProducts(params),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
