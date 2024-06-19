// /* eslint-disable react/prop-types */
// import "@/components/Modal/index.css";
// import { useRef, useEffect } from "react";
// import RemoveIcon from "uiEl/RemoveIcon/index.jsx";

// export function Modal({
//   isClosed,
//   children,
//   styles,
//   handleModalClose,
//   classes,
// }) {
//   function handleRemoveClick(e) {
//     e.stopPropagation();
//     handleModalClose();
//   }

//   return createPortal(
//     <dialog open={!isClosed} className={`modal ${classes}`} style={styles}>
//       <RemoveIcon onClick={handleRemoveClick} />
//       {children}
//     </dialog>,
//     document.body
//   );
// }

import { createPortal } from "react-dom";
import { useModal } from "@/context";

type ModalType = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalType) {
  const modal = useModal();

  return createPortal(
    <dialog open={modal.isOpen} className="modal">
      {/* <RemoveIcon onClick={modal.openModal} /> */}
      {children}
    </dialog>,
    document.body
  );
}
