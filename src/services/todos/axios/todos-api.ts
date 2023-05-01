import axios from "axios";
import { Todos, baseUrl } from "../";

//axios way

//create
const axiosCreateTodos = async (todo: Todos): Promise<Todos[] | unknown> => {
  try {
    const response = await axios.post(`${baseUrl}`, todo);
    return response.data;
  } catch (err) {
    return err;
  }
};

// READ
const axiosGetTodos = async (): Promise<Todos[] | unknown> => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    return err;
  }
};

// UPDATE
const axiosUpdateTodo = async (id: string | number, todo: Todos) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, todo);
    return response.data;
  } catch (err) {
    return err;
  }
};

//delete
const axiosDeleteTodo = async (id: string | number): Promise<Todos[] | unknown> => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { axiosCreateTodos, axiosGetTodos, axiosUpdateTodo, axiosDeleteTodo };
