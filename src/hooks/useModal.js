import { useState } from "react";

export default function useModal() {
  const [isClosed, setIsClosed] = useState(true);

  function closeModal() {
    setIsClosed(true);
  }

  function openModal() {
    setIsClosed(false);
  }

  return {
    isClosed: isClosed,
    openModal,
    closeModal,
  };
}
