import { useContext, createContext, useState } from "react";

const InputContext = createContext();
const UpdateInputContext = createContext();

export function useInput() {
  return useContext(InputContext);
}

export function useUpdateInput() {
  return useContext(UpdateInputContext);
}

export function InputProvider({ children }) {
  const [input, setInput] = useState([]);

  return (
    <InputContext.Provider value={input}>
      <UpdateInputContext.Provider value={setInput}>
        {children}
      </UpdateInputContext.Provider>
    </InputContext.Provider>
  );
}
