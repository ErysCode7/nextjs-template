import { useProductsApi } from '@/services/products/axios/products-api';
import { ROUTES } from '@/utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';

const ProductsDetails = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const productID = router?.query?.id as string | number;

  const {
    axiosCreateProduct,
    axiosUpdateProduct,
    axiosDeleteProduct,
    // ----- API CALL REACT QUERY -----
    useProductDetails,
  } = useProductsApi();

  // --------------- MUTATIONS ---------------
  const { mutate: addProductMutation } = useMutation(axiosCreateProduct, {
    onSuccess: () => {
      //when this succeed the query key invalidate meaning it triggers refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {},
  });

  //update a single product
  const { mutate: updateProductMutation } = useMutation(axiosUpdateProduct, {
    onSuccess: () => {
      //when this succeed the query key invalidate meaning it triggers refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {},
  });

  //delete a single product
  const { mutate: deleteProductMutation } = useMutation(axiosDeleteProduct, {
    onSuccess: () => {
      //when this succeed the query key invalidate meaning it triggers refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {},
  });

  const { data: productDetails, isLoading: isLoadingProductDetails } = useProductDetails(productID);

  if (isLoadingProductDetails) {
    return (
      <div className="flex items-center h-screen w-full justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">LOADING......</h1>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="w-4/5 absolute m-auto left-0 right-0 top-[-50px] md:top-10">
        <button
          onClick={() => router.push(ROUTES.PRODUCTS)}
          className="w-24 flex items-center justify-center gap-1 bg-blue-500 text-white rounded p-2 active:scale-[98%]"
        >
          <BsArrowLeftShort />
          <p>Back</p>
        </button>
      </div>
      <div className="flex items-center justify-between md:h-[calc(100vh_-_80px)] w-full mt-20 pb-10 md:pb-0 md:mt-0">
        <div className="w-4/5 m-auto flex flex-col md:flex-row gap-5 sm:gap-10">
          <div className="relative h-[250px] w-full sm:h-[385px] sm:flex-1">
            <Image
              src={productDetails?.image ?? ''}
              alt={productDetails?.title ?? 'No image'}
              fill
              className="object-contain md:object-fill rounded"
            />
          </div>
          <div className="flex-[1.5]">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl">{productDetails?.title}</h2>
            <p className="text-gray-500 mt-3">{productDetails?.description}</p>
            <div className="flex items-center gap-2 my-2">
              <h4 className="text-base sm:text-xl">Category</h4>
              <p className="capitalize text-base sm:text-xl">{productDetails?.category}</p>
            </div>

            <p className="text-green-500 text-base sm:text-xl md:text-2xl">
              ${productDetails?.price}
            </p>
            <div className="mt-3">
              <p>Count: {productDetails?.rating?.count}</p>
              <p>Rate: {productDetails?.rating?.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
