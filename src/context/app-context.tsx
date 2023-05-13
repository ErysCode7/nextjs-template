import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type AppContextType = {
  // Define the properties and methods you want to provide in the context
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({
  count: 0,
  setCount: () => {},
});

export const AppContextProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  const value = {
    //state
    count,
    //func
    setCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
