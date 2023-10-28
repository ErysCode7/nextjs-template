import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Counter = {
  counter: number;
  anotherCounter: number;
  increaseCount: () => void;
  increaseCountBy: (number: number) => void;
  decreaseCount: () => void;
  decreaseCountBy: (number: number) => void;
  resetCount: () => void;
};

export const useCounterStore = create<Counter>()(
  persist(
    set => ({
      counter: 0,
      anotherCounter: 0,
      increaseCount: () => set(state => ({ counter: state.counter + 1 })),
      increaseCountBy: number => set(state => ({ counter: state.counter + number })),
      decreaseCount: () => set(state => ({ counter: state.counter - 1 })),
      decreaseCountBy: number => set(state => ({ counter: state.counter - number })),
      resetCount: () => set({ counter: 0 }),
    }),
    {
      name: 'counter-store',
    },
  ),
);
