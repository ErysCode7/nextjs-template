import axios from 'axios';
import { Products, baseUrl } from '../';

// GET ALL PRODUCTS
export const axiosGetProducts = async (params?: string): Promise<Products[]> => {
  try {
    const response = await axios.get(`${baseUrl}${params ? params : ''}`);
    return response.data;
  } catch (err) {
    return [];
  }
};

// GET A SINGLE PRODUCT
export const axiosGetProductDetails = async (id: string | number): Promise<Products | unknown> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

// CREATE A SINGLE PRODUCT
export const axiosCreateProduct = async (product: Products) => {
  try {
    const response = await axios.post(`${baseUrl}`, product);
    return response.data;
  } catch (err) {
    return err;
  }
};

// UPDATE A SINGLE PRODUCT
export const axiosUpdateProduct = async (product: Products) => {
  try {
    const response = await axios.put(`${baseUrl}/${product?.id}`, product);
    return response.data;
  } catch (err) {
    return err;
  }
};

// DELETE A SINGLE PRODUCT
export const axiosDeleteProduct = async (id: string | number) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};
