import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TodoItem = {
  id: number;
  task: string;
  completed: boolean;
};

type Todo = {
  todos: TodoItem[];
  addTodo: (item: TodoItem) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const useTodosStore = create<Todo>()(
  devtools(
    persist(
      set => ({
        // STATES
        todos: [],

        // ----- FUNCTIONS ------
        addTodo: (item: TodoItem) => set(state => ({ todos: [...state.todos, item] })),

        updateTodo: (id: number) =>
          set(state => ({
            todos: state.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
          })),

        deleteTodo: (id: number) =>
          set(state => ({
            todos: state.todos.filter(todo => todo.id !== id),
          })),
      }),
      { name: 'todos' },
    ),
  ),
);
