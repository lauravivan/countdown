import { useState, useEffect } from "react";
import { SortContext } from "./index";
import { SORT_OPTIONS } from "@/util";

interface SortProviderType {
  children: React.ReactNode;
}

export function SortProvider({ children }: SortProviderType) {
  const [sort, setSort] = useState(
    localStorage.getItem("sortApplied") || SORT_OPTIONS[0]
  );

  useEffect(() => {
    localStorage.setItem("sortApplied", sort);
  }, [sort]);

  const selectSort = (sort: string) => {
    setSort(sort);
  };

  return (
    <SortContext.Provider value={{ sort, selectSort }}>
      {children}
    </SortContext.Provider>
  );
}
