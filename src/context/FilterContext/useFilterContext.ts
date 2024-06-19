import { FILTER_OPTIONS } from "@/util";
import { createContext, useContext } from "react";

const defaultFilterContextValue: FilterContextNamespace.FilterContextType = {
  filter: FILTER_OPTIONS[0],
  selectFilter: () => {},
};

export const FilterContext =
  createContext<FilterContextNamespace.FilterContextType>(
    defaultFilterContextValue
  );

export function useFilter() {
  return useContext(FilterContext);
}
