import { ProductsDetails } from '@/modules/product';
import { UseProductsApi } from '@/services/products/axios/products-api';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  isError: boolean;
};

const ProductDetailsPage: NextPage<Props> = ({ isError }) => {
  if (isError) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl">Error</h1>
      </div>
    );
  }

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

  let isError = false;

  try {
    await queryClient.fetchQuery({
      queryKey: ['product', productID],
      queryFn: () => axiosGetProductDetails(productID),
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
