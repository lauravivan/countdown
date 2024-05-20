/* eslint-disable react/prop-types */
import "@/components/Modal/index.css";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import RemoveIcon from "uiEl/RemoveIcon/index.jsx";

export default function Modal({
  isClosed,
  children,
  styles,
  handleModalClose,
  classes,
}) {
  function handleRemoveClick(e) {
    e.stopPropagation();
    handleModalClose();
  }

  return createPortal(
    <dialog open={!isClosed} className={`modal ${classes}`} style={styles}>
      <RemoveIcon onClick={handleRemoveClick} />
      {children}
    </dialog>,
    document.body
  );
}
