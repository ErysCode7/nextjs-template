import axios from 'axios';
import { Todos, baseUrl } from '../';

//axios way

// CREATE
const axiosCreateTodos = async (todo: Todos): Promise<Todos[] | unknown> => {
  try {
    const response = await axios.post(`${baseUrl}`, todo);
    return response.data;
  } catch (err) {
    return err;
  }
};

// READ
const axiosGetTodos = async (page: number): Promise<Todos[]> => {
  try {
    const response = await axios.get(`${baseUrl}${page ? `?_page=${page}` : ''}`);
    return response.data;
  } catch (err) {
    return [];
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

// DELETE
const axiosDeleteTodo = async (id: string | number): Promise<Todos[] | unknown> => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { axiosCreateTodos, axiosDeleteTodo, axiosGetTodos, axiosUpdateTodo };
