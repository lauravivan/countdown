import { useState } from "react";
import { ModalContext } from "./index";
import { Modal } from "@/components";

type ModalProviderType = {
  children: React.ReactNode;
};

export function ModalProvider({ children }: ModalProviderType) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(<></>);

  const openModal = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  const insertContent = (content: React.ReactNode) => {
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, insertContent }}>
      {children}
      <Modal>{content}</Modal>
    </ModalContext.Provider>
  );
}
