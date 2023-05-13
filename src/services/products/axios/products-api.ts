import { QueryKey, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Products, baseUrl } from "../..";

export const UseProductsApi = () => {
  //get all products
  const axiosGetProducts = async (): Promise<Products[]> => {
    try {
      const response = await axios.get(`${baseUrl}`);
      return response.data;
    } catch (err) {
      return [];
    }
  };

  //get a single product
  const axiosGetProductDetails = async (
    id: string | number
  ): Promise<Products | unknown> => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  //create a single product
  const axiosCreateProduct = async (product: Products) => {
    try {
      const response = await axios.post(`${baseUrl}`, product);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  //update a single product
  const axiosUpdateProduct = async (product: Products) => {
    try {
      const response = await axios.put(`${baseUrl}/${product?.id}`, product);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  //delete a single product
  const axiosDeleteProduct = async (id: string | number) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  // ----- API CALL REACT QUERY -----

  //api call to get all products
  const useProducts = () => {
    const { data: products, isLoading } = useQuery<Products[]>({
      queryKey: ["products"],
      queryFn: () => axiosGetProducts(),
    });

    return { products, isLoading };
  };

  //api call to get a single product
  const useProductDetails = (productId: string | number) => {
    const { data: productDetails, isLoading: isLoadingProductDetails } =
      useQuery<Products>({
        queryKey: ["product", productId],
        queryFn: () => axiosGetProductDetails(productId),
      } as { queryKey: QueryKey });

    return { productDetails, isLoadingProductDetails };
  };

  // --------------- MUTATIONS ---------------

  // const { mutate: addProductMutation } = useMutation(axiosCreateProduct, {
  //   onSuccess: () => {
  //     //when this succeed the query key invalidate meaning it triggers refetch
  //     queryClient.invalidateQueries({ queryKey: ["products"] });
  //   },
  //   onError: () => {},
  // });

  // //update a single product
  // const { mutate: updateProductMutation } = useMutation(axiosUpdateProduct, {
  //   onSuccess: () => {
  //     //when this succeed the query key invalidate meaning it triggers refetch
  //     queryClient.invalidateQueries({ queryKey: ["products"] });
  //   },
  //   onError: () => {},
  // });

  // //delete a single product
  // const { mutate: deleteProductMutation } = useMutation(axiosDeleteProduct, {
  //   onSuccess: () => {
  //     //when this succeed the query key invalidate meaning it triggers refetch
  //     queryClient.invalidateQueries({ queryKey: ["products"] });
  //   },
  //   onError: () => {},
  // });

  return {
    axiosGetProducts,
    axiosGetProductDetails,
    axiosCreateProduct,
    axiosUpdateProduct,
    axiosDeleteProduct,
    // ----- API CALL REACT QUERY -----
    useProducts,
    useProductDetails,
  };
};
