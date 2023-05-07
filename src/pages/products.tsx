import Product from "@/components/product/product";
import {
  axiosGetProducts,
  useProducts,
} from "@/services/products/axios/products-api";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSideProps, NextPage } from "next";

type Props = {};

const Products: NextPage<Props> = () => {
  const { products, isLoading } = useProducts();

  // const { data: products, isLoading } = useQuery<TProducts[]>({
  //   queryKey: ["products"],
  //   queryFn: () => axiosGetProducts(),
  // });

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 m-auto h-full w-[90%] lg:w-[85%] py-5">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  //axios
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => axiosGetProducts(),
  });

  //fetch
  // await queryClient.prefetchQuery({
  //   queryKey: ["products"],
  //   queryFn: () => fetchGetProducts(),
  // });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
