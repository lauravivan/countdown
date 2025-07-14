import { getStoredSort } from "@/util/storage";
import { useState } from "react";

export default function useSort() {
  const [sort, setSort] = useState(() => getStoredSort());

  const selectSort = (sort: string) => {
    setSort(sort);
  };

  return {
    sort,
    selectSort,
  };
}
