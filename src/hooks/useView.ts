import { DEFAULT_VIEW, TOGGLE_VIEW } from "@/util/constants";
import { getStoredView } from "@/util/storage";
import { useState } from "react";

export default function useView() {
  const [view, setView] = useState<string>(() => getStoredView());

  const toggleView = () => {
    setView((prevView) =>
      prevView === DEFAULT_VIEW ? TOGGLE_VIEW : DEFAULT_VIEW
    );
  };

  return {
    view,
    toggleView,
  };
}
