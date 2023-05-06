import { QueryKey, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Products, baseUrl } from "../";

const axiosGetProducts = async (): Promise<Products[]> => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (err) {
    return [];
  }
};

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

const useProducts = () => {
  const { data: products, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: () => axiosGetProducts(),
  });

  return { products, isLoading };
};

const useProductDetails = (productId: string | number) => {
  const { data: productDetails, isLoading: isLoadingProductDetails } =
    useQuery<Products>({
      queryKey: ["product", productId],
      queryFn: () => axiosGetProductDetails(productId),
    } as { queryKey: QueryKey });

  return { productDetails, isLoadingProductDetails };
};

export {
  axiosGetProducts,
  axiosGetProductDetails,
  useProducts,
  useProductDetails,
};
