import { ModalContentType } from "@/types/modal";
import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState<ModalContentType>(null);
  const [title, setTitle] = useState("");

  const openModal = (type: ModalContentType) => {
    setIsOpen(true);
    setContentType(type);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    openModal,
    closeModal,
    isOpen,
    handleTitle: (title: string) => setTitle(title),
    title,
    contentType,
  };
}
