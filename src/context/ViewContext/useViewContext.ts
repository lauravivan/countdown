import { DEFAULT_VIEW } from "@/util";
import { createContext, useContext } from "react";

interface ViewContextType {
  view: string;
  toggleView: () => void;
}

const defaultViewContextValue: ViewContextType = {
  view: DEFAULT_VIEW,
  toggleView: () => {},
};

export const ViewContext = createContext<ViewContextType>(
  defaultViewContextValue
);

export function useView() {
  return useContext(ViewContext);
}
