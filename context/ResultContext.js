import { useState, useContext, createContext } from "react";

const ResultContext = createContext();
const UpdateResultContext = createContext();

export const useResult = () => {
  return useContext(ResultContext);
};

export const useUpdateResult = () => {
  return useContext(UpdateResultContext);
};

export function ResultProvider({ children }) {
  const [result, setResult] = useState("0");
  return (
    <ResultContext.Provider value={result}>
      <UpdateResultContext.Provider value={setResult}>
        {children}
      </UpdateResultContext.Provider>
    </ResultContext.Provider>
  );
}
