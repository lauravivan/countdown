import { createPortal } from "react-dom";
import { useModal } from "@/context";

type ModalType = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalType) {
  const modal = useModal();

  return createPortal(
    <dialog open={modal.isOpen} className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <h3 className="modal__content__header__title">{modal.modalTitle}</h3>
          <button
            className="modal__content__header__close"
            onClick={() => modal.closeModal()}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        {children}
      </div>
    </dialog>,
    document.body
  );
}
