import { SortType } from "@/types/sort";
import { SORT_OPTIONS } from "../constants";

export function getStoredSort(): SortType {
  const sort = localStorage.getItem("countdown-sort") as SortType;
  return sort || SORT_OPTIONS[0];
}

export function storeSort(sort: SortType) {
  localStorage.setItem("countdown-sort", sort);
}
