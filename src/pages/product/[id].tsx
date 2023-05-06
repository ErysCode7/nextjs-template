import {
  axiosGetProductDetails,
  useProductDetails,
} from "@/services/products/axios/products-api";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

const ProductDetails: NextPage<Props> = () => {
  const router = useRouter();
  const productID = router?.query?.id as string | number;

  const { productDetails, isLoadingProductDetails } =
    useProductDetails(productID);

  if (isLoadingProductDetails) {
    return (
      <div className="flex items-center h-screen w-full justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          LOADING......
        </h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between md:h-screen w-full mt-52 md:mt-0">
      <div className="w-4/5 m-auto flex flex-col md:flex-row gap-5 sm:gap-10">
        <div className="relative h-[250px] w-full sm:h-[385px] sm:flex-1">
          <Image
            src={productDetails?.image || ""}
            alt={productDetails?.title || "No image"}
            fill
          />
        </div>
        <div className="flex-[1.5]">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl">
            {productDetails?.title}
          </h2>
          <p className="text-gray-500 mt-3">{productDetails?.description}</p>
          <div className="flex items-center gap-2 my-2">
            <h4 className="text-base sm:text-xl">Category</h4>
            <p className="capitalize text-base sm:text-xl">
              {productDetails?.category}
            </p>
          </div>

          <p className="text-green-500 text-base sm:text-xl md:text-2xl">
            ${productDetails?.price}
          </p>
          <div className="mt-3">
            <p>Count: {productDetails?.rating.count}</p>
            <p>Rate: {productDetails?.rating.rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productID = context?.params?.id as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["product", productID],
    queryFn: () => axiosGetProductDetails(productID),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
