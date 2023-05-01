import { Products, baseUrl } from "../";

const fetchGetProducts = async (): Promise<Products | unknown> => {
  try {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export { fetchGetProducts };
