import { SORT_OPTIONS } from "@/util";
import { createContext, useContext } from "react";

interface SortContextType {
  sort: string;
  selectSort: (sort: string) => void;
}

const defaultSortContextValue: SortContextType = {
  sort: SORT_OPTIONS[0],
  selectSort: () => {},
};

export const SortContext = createContext<SortContextType>(
  defaultSortContextValue
);

export function useSort() {
  return useContext(SortContext);
}
