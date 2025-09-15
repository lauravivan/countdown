import { SortType } from "@/types/sort";
import { getStoredSort, storeSort } from "@/util/storage";
import { useState } from "react";

export default function useSort() {
  const [sort, setSort] = useState<SortType>(() => getStoredSort());

  const selectSort = (sort: SortType) => {
    setSort(sort);
    storeSort(sort);
  };

  return {
    sort,
    selectSort,
  };
}
