import { QueryKey, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Products } from '../';
import {
  axiosCreateProduct,
  axiosDeleteProduct,
  axiosGetProductDetails,
  axiosGetProducts,
  axiosUpdateProduct,
} from './products-api';
import { QUERY_KEYS } from './products-keys';

export const useGetProducts = (params?: string) => {
  return useQuery<Products[]>({
    queryKey: [QUERY_KEYS.GET_PRODUCTS, params],
    queryFn: async () => axiosGetProducts(params),
  });
};

export const useGetProductDetails = (productId: string | number) => {
  return useQuery<Products>({
    queryKey: [QUERY_KEYS.GET_SINGLE_PRODUCT, productId],
    queryFn: async () => axiosGetProductDetails(productId),
  } as { queryKey: QueryKey });
};

// --------------- MUTATIONS ---------------
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(axiosCreateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PRODUCTS] });
    },
    onError: () => {},
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(axiosUpdateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PRODUCTS] });
    },
    onError: () => {},
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(axiosDeleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_PRODUCTS] });
    },
    onError: () => {},
  });
};
