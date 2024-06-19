import { createContext, useContext } from "react";

const defaultModalContextValue: ModalContextNamespace.ModalContextType = {
  isOpen: false,
  openModal: () => {},
  insertContent: () => {},
};

export const ModalContext =
  createContext<ModalContextNamespace.ModalContextType>(
    defaultModalContextValue
  );

export function useModal() {
  return useContext(ModalContext);
}
