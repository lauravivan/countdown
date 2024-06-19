import { createPortal } from "react-dom";
import { useModal } from "@/context";

type ModalType = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalType) {
  const modal = useModal();

  return createPortal(
    <dialog open={modal.isOpen} className="modal">
      {children}
    </dialog>,
    document.body
  );
}
