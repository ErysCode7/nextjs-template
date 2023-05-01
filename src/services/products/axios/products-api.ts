import { useQuery } from "@tanstack/react-query";
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

const useProducts = () => {
  const { data: products, isLoading } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: () => axiosGetProducts(),
  });

  return { products, isLoading };
};

export { axiosGetProducts, useProducts };
