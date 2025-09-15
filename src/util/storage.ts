import { FilterType } from "@/types/filter";
import {
  DEFAULT_THEME,
  DEFAULT_VIEW,
  FILTER_OPTIONS,
  SORT_OPTIONS,
} from "./constants";
import { SortType } from "@/types/sort";
import { ThemeType } from "@/types/theme";
import { ViewType } from "@/types/view";

export function getStoredEvents() {
  const events = localStorage.getItem("countdown-events");

  if (events) {
    return JSON.parse(events);
  }

  return [];
}

export function storeEvents(events: EventType[]) {
  localStorage.setItem("countdown-events", JSON.stringify(events));
}

export function getStoredView(): ViewType {
  const view = localStorage.getItem("countdown-view") as ViewType;

  if (view) {
    return view;
  }

  return DEFAULT_VIEW;
}

export function storeView(view: ViewType) {
  localStorage.setItem("countdown-view", view);
}

export function getStoredFilter(): FilterType {
  const filter = localStorage.getItem("countdown-filter") as FilterType;

  if (filter) {
    return filter;
  }

  return FILTER_OPTIONS[0];
}

export function storeFilter(filter: FilterType) {
  localStorage.setItem("countdown-filter", filter);
}

export function getStoredSort(): SortType {
  const sort = localStorage.getItem("countdown-sort") as SortType;

  if (sort) {
    return sort;
  }

  return SORT_OPTIONS[0];
}

export function storeSort(sort: SortType) {
  localStorage.setItem("countdown-sort", sort);
}

export function getStoredTheme(): ThemeType {
  const theme = localStorage.getItem("countdown-theme") as ThemeType;

  if (theme) {
    return theme;
  }

  return DEFAULT_THEME;
}

export function storeTheme(theme: ThemeType) {
  localStorage.setItem("countdown-theme", theme);
}
