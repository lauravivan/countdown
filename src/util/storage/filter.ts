import { FilterType } from "@/types/filter";
import { FILTER_OPTIONS } from "../constants";

export function getStoredFilter(): FilterType {
  const filter = localStorage.getItem("countdown-filter") as FilterType;
  return filter || FILTER_OPTIONS[0];
}

export function storeFilter(filter: FilterType) {
  localStorage.setItem("countdown-filter", filter);
}
