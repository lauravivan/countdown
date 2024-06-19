import { FILTER_OPTIONS } from "@/util";
import { FilterContext } from "./index";
import { useState, useEffect } from "react";

type FilterProviderType = {
  children: React.ReactNode;
};

export function FilterProvider({ children }: FilterProviderType) {
  const [filter, setFilter] = useState(
    localStorage.getItem("filterApplied") || FILTER_OPTIONS[0]
  );

  useEffect(() => {
    localStorage.setItem("filterApplied", filter);
  }, [filter]);

  const selectFilter = (filterSelected: string) => {
    setFilter(filterSelected);
  };

  return (
    <FilterContext.Provider value={{ filter, selectFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
