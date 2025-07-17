import { DEFAULT_VIEW, TOGGLE_VIEW } from "@/util/constants";
import { getStoredView, storeView } from "@/util/storage";
import { useState } from "react";

export default function useView() {
  const [view, setView] = useState<string>(() => getStoredView());

  const toggleView = () => {
    setView((prevView) => {
      const newView = prevView === DEFAULT_VIEW ? TOGGLE_VIEW : DEFAULT_VIEW;

      storeView(newView);

      return newView;
    });
  };

  return {
    view,
    toggleView,
  };
}
