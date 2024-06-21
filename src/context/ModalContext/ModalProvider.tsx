import { useState } from "react";
import { ModalContext } from "./index";
import { Modal } from "@/components";

interface ModalProviderType {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderType) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(<></>);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const insertContent = (content: React.ReactNode) => {
    setContent(content);
  };

  const insertModalTitle = (modalTitle: string) => {
    setModalTitle(modalTitle);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        insertContent,
        insertModalTitle,
        modalTitle,
      }}
    >
      {children}
      <Modal>{content}</Modal>
    </ModalContext.Provider>
  );
}
