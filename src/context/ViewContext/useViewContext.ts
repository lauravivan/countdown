import { DEFAULT_VIEW } from "@/util";
import { createContext, useContext } from "react";

const defaultViewContextValue: ViewContextNamespace.ViewContextType = {
  view: DEFAULT_VIEW,
  toggleView: () => {},
};

export const ViewContext = createContext<ViewContextNamespace.ViewContextType>(
  defaultViewContextValue
);

export function useView() {
  return useContext(ViewContext);
}
