import { QueryKey, useQuery } from "@tanstack/react-query";
import { Products, baseUrl } from "../";

const fetchGetProducts = async (): Promise<Products[]> => {
  try {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return [];
  }
};

const fetchGetProductDetails = async (
  id: string | number
): Promise<Products | unknown> => {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

const useProducts = () => {
  const { data: products, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: () => fetchGetProducts(),
  });

  return { products, isLoading };
};

const useProductDetails = (productId: string | number) => {
  const { data: productDetails, isLoading: isLoadingProductDetails } = useQuery<
    Products | unknown
  >({
    queryKey: ["product", productId],
    queryFn: () => fetchGetProductDetails(productId),
  } as { queryKey: QueryKey });

  return { productDetails, isLoadingProductDetails };
};

export {
  fetchGetProducts,
  fetchGetProductDetails,
  useProducts,
  useProductDetails,
};
