import { useQuery } from "@tanstack/react-query";
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

const useProducts = () => {
  const { data: products, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: () => fetchGetProducts(),
  });

  return { products, isLoading };
};

export { fetchGetProducts, useProducts };
