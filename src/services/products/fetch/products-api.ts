import { QueryKey, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Products, baseUrl } from '../..';

export const UseProductsApi = () => {
  const queryClient = useQueryClient();

  //get all products
  const fetchGetProducts = async (): Promise<Products[]> => {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      return data;
    } catch (err) {
      return [];
    }
  };

  //get a single product
  const fetchGetProductDetails = async (id: string | number): Promise<Products | unknown> => {
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  //create a single product
  const fetchCreateProduct = async (product: Products) => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  //update a single product
  const fetchUpdateProduct = async (product: Products) => {
    try {
      const response = await fetch(`${baseUrl}/${product?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  //delete a single product
  const fetchDeleteProduct = async (id: string | number) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  // ----- API CALL REACT QUERY -----

  //api call to get all products
  const useProducts = () => {
    const { data: products, isLoading } = useQuery<Products[]>({
      queryKey: ['products'],
      queryFn: () => fetchGetProducts(),
    });

    return { products, isLoading };
  };

  //api call to get a single product
  const useProductDetails = (productId: string | number) => {
    const { data: productDetails, isLoading: isLoadingProductDetails } = useQuery<
      Products | unknown
    >({
      queryKey: ['product', productId],
      queryFn: () => fetchGetProductDetails(productId),
    } as { queryKey: QueryKey });

    return { productDetails, isLoadingProductDetails };
  };

  //create a single product
  const addProductMutation = useMutation(fetchCreateProduct, {
    onSuccess: () => {
      //when this succeed the query key invalidate meaning it triggers refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {},
  });

  //update a single product
  const updateProductMutation = useMutation(fetchUpdateProduct, {
    onSuccess: () => {
      //when this succeed the query key invalidate meaning it triggers refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {},
  });

  //delete a single product
  const deleteProductMutation = useMutation(fetchDeleteProduct, {
    onSuccess: () => {
      //when this succeed the query key invalidate meaning it triggers refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {},
  });

  return {
    fetchGetProducts,
    fetchGetProductDetails,
    fetchCreateProduct,
    fetchUpdateProduct,
    fetchDeleteProduct,
    // ----- API CALL REACT QUERY -----
    useProducts,
    useProductDetails,
    addProductMutation,
    updateProductMutation,
    deleteProductMutation,
  };
};
