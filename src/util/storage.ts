import {
  DEFAULT_THEME,
  DEFAULT_VIEW,
  FILTER_OPTIONS,
  SORT_OPTIONS,
} from "./constants";

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

export function getStoredView() {
  const view = localStorage.getItem("countdown-view");

  if (view) {
    return view;
  }

  return DEFAULT_VIEW;
}

export function storeView(view: string) {
  localStorage.setItem("countdown-view", view);
}

export function getStoredFilter() {
  const filter = localStorage.getItem("countdown-filter");

  if (filter) {
    return filter;
  }

  return FILTER_OPTIONS[0];
}

export function storeFilter(filter: string) {
  localStorage.setItem("countdown-filter", filter);
}

export function getStoredSort() {
  const sort = localStorage.getItem("countdown-sort");

  if (sort) {
    return sort;
  }

  return SORT_OPTIONS[0];
}

export function storeSort(sort: string) {
  localStorage.setItem("countdown-sort", sort);
}

export function getStoredTheme() {
  const theme = localStorage.getItem("countdown-theme");

  if (theme) {
    return theme;
  }

  return DEFAULT_THEME;
}

export function storeTheme(theme: string) {
  localStorage.setItem("countdown-theme", theme);
}
