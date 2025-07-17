import { getStoredFilter, storeFilter } from "@/util/storage";
import { useState } from "react";

export default function useFilter() {
  const [filter, setFilter] = useState(() => getStoredFilter());

  const selectFilter = (filterSelected: string) => {
    setFilter(filterSelected);
    storeFilter(filterSelected);
  };

  return {
    selectFilter,
    filter,
  };
}
