import axios from "axios";
import { Products, baseUrl } from "../";

const axiosGetProducts = async (): Promise<Products[] | unknown> => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { axiosGetProducts };
