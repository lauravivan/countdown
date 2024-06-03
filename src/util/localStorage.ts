import {
  DEFAULT_THEME,
  DEFAULT_VIEW,
  FILTER_OPTIONS,
  SORT_OPTIONS,
} from "@/util/index";

export function setTheme(theme: string) {
  localStorage.setItem("countdownTheme", theme);
}

export function getTheme(): string {
  return localStorage.getItem("countdownTheme") || DEFAULT_THEME;
}

export function setCardsView(view: string) {
  localStorage.setItem("cardsView", view);
}

export function getCardsView(): string {
  return localStorage.getItem("cardsView") || DEFAULT_VIEW;
}

export function setFilterApplied(filter: string) {
  localStorage.setItem("filterApplied", filter);
}

export function getFilterApplied(): string {
  return localStorage.getItem("filterApplied") || FILTER_OPTIONS[0];
}

export function setSortApplied(sort: string) {
  localStorage.setItem("sortApplied", sort);
}

export function getSortApplied(): string {
  return localStorage.getItem("sortApplied") || SORT_OPTIONS[0];
}
