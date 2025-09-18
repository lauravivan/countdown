import { ViewType } from "@/types/view";
import { DEFAULT_VIEW } from "../constants";

export function getStoredView(): ViewType {
  const view = localStorage.getItem("countdown-view") as ViewType;
  return view || DEFAULT_VIEW;
}

export function storeView(view: ViewType) {
  localStorage.setItem("countdown-view", view);
}
