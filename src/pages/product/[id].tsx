import { ProductsDetails } from '@/modules/product';
import { UseProductsApi } from '@/services/products/axios/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {};

const ProductDetailsPage: NextPage<Props> = () => {
  return (
    <>
      <ProductsDetails />
    </>
  );
};

export default ProductDetailsPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const productID = context?.params?.id as string;

  const queryClient = new QueryClient();

  const { axiosGetProductDetails } = UseProductsApi();

  await queryClient.prefetchQuery({
    queryKey: ['product', productID],
    queryFn: () => axiosGetProductDetails(productID),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
