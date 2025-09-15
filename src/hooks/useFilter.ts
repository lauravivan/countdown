import { FilterType } from "@/types/filter";
import { getStoredFilter, storeFilter } from "@/util/storage";
import { useState } from "react";

export default function useFilter() {
  const [filter, setFilter] = useState<FilterType>(() => getStoredFilter());

  const selectFilter = (filterSelected: FilterType) => {
    setFilter(filterSelected);
    storeFilter(filterSelected);
  };

  return {
    selectFilter,
    filter,
  };
}
