import { createContext, useContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  insertContent: (content: React.ReactNode) => void;
  insertModalTitle: (modalTitle: string) => void;
  modalTitle: string;
}

const defaultModalContextValue: ModalContextType = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  insertContent: () => {},
  insertModalTitle: () => {},
  modalTitle: "",
};

export const ModalContext = createContext<ModalContextType>(
  defaultModalContextValue
);

export function useModal() {
  return useContext(ModalContext);
}
