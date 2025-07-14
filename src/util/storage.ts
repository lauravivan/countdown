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

export function getStoredView() {
  const view = localStorage.getItem("countdown-view");

  if (view) {
    return view;
  }

  return DEFAULT_VIEW;
}

export function getStoredFilter() {
  const filter = localStorage.getItem("countdown-filter");

  if (filter) {
    return filter;
  }

  return FILTER_OPTIONS[0];
}

export function getStoredSort() {
  const sort = localStorage.getItem("countdown-sort");

  if (sort) {
    return sort;
  }

  return SORT_OPTIONS[0];
}

export function getStoredTheme() {
  const theme = localStorage.getItem("countdown-theme");

  if (theme) {
    return theme;
  }

  return DEFAULT_THEME;
}
