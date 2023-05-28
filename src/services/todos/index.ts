export const baseUrl = `https://jsonplaceholder.typicode.com/todos`;

export type Todos = {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
};
