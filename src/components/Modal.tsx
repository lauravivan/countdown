type ModalType = {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
};

export function Modal({ title, children, closeModal, isOpen }: ModalType) {
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <h3 className="modal__content__header__title">{title}</h3>
          <button
            className="modal__content__header__close"
            onClick={closeModal}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
