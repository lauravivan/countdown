import { createContext, useContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  insertContent: (content: React.ReactNode) => void;
}

const defaultModalContextValue: ModalContextType = {
  isOpen: false,
  openModal: () => {},
  insertContent: () => {},
};

export const ModalContext = createContext<ModalContextType>(
  defaultModalContextValue
);

export function useModal() {
  return useContext(ModalContext);
}
