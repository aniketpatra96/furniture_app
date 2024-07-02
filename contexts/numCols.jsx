import { createContext, useContext, useState } from "react";

export const numCols = createContext();

export function useCols() {
  return useContext(numCols);
}

export default function NumColsProvider({ children }) {
  const [numOfCols, setNumOfCols] = useState(1);
  return (
    <numCols.Provider value={{ numOfCols, setNumOfCols }}>
      {children}
    </numCols.Provider>
  );
}
