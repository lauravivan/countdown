import { SORT_OPTIONS } from "@/util";
import { createContext, useContext } from "react";

const defaultSortContextValue: SortContextNamespace.SortContextType = {
  sort: SORT_OPTIONS[0],
  selectSort: () => {},
};

export const SortContext = createContext<SortContextNamespace.SortContextType>(
  defaultSortContextValue
);

export function useSort() {
  return useContext(SortContext);
}
