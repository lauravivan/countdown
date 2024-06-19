import { DEFAULT_VIEW, TOGGLE_VIEW } from "@/util";
import { ViewContext } from "./useViewContext";
import { useEffect, useState } from "react";

type ViewProviderType = {
  children: React.ReactNode;
};

export function ViewProvider({ children }: ViewProviderType) {
  const [view, setView] = useState<string>(
    localStorage.getItem("cardsView") || DEFAULT_VIEW
  );

  useEffect(() => {
    localStorage.setItem("cardsView", view);
  }, [view]);

  const toggleView = () => {
    setView((prevView) =>
      prevView === DEFAULT_VIEW ? TOGGLE_VIEW : DEFAULT_VIEW
    );
  };

  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}
