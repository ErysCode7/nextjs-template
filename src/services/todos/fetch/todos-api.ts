import { Todos, baseUrl } from "../";

//fetch way

//create
const fetchCreateTodos = async (todo: Todos): Promise<Todos[] | unknown> => {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

// READ
const fetchGetTodos = async (): Promise<Todos[] | unknown> => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

// UPDATE
const fetchUpdateTodo = async (
  id: string | number,
  todo: Todos
): Promise<Todos[] | unknown> => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

//delete
const fetchDeleteTodo = async (
  id: string | number
): Promise<Todos[] | unknown> => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export { fetchCreateTodos, fetchGetTodos, fetchUpdateTodo, fetchDeleteTodo };
