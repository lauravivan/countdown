import { FILTER_OPTIONS } from "@/util";
import { createContext, useContext } from "react";

interface FilterContextType {
  filter: string;
  selectFilter: (filter: string) => void;
}

const defaultFilterContextValue: FilterContextType = {
  filter: FILTER_OPTIONS[0],
  selectFilter: () => {},
};

export const FilterContext = createContext<FilterContextType>(
  defaultFilterContextValue
);

export function useFilter() {
  return useContext(FilterContext);
}
