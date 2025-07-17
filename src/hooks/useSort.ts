import { getStoredSort, storeSort } from "@/util/storage";
import { useState } from "react";

export default function useSort() {
  const [sort, setSort] = useState(() => getStoredSort());

  const selectSort = (sort: string) => {
    setSort(sort);
    storeSort(sort);
  };

  return {
    sort,
    selectSort,
  };
}
