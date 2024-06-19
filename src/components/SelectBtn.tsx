// /* eslint-disable react/prop-types */
// import Modal from "@/components/Modal/index.jsx";
// import useModal from "@/hooks/useModal";
// import "@/components/SelectBtn/index.css";
// import { useState } from "react";

import { useModal, useSort } from "@/context";
import { Modal } from "./Modal";

// export function SelectBtn({ children, iconName }) {
//   const { isClosed, openModal, closeModal } = useModal();
//   const [btnCoordenates, setBtnCoordenates] = useState({});

//   function handleBtnClick(e) {
//     e.stopPropagation();
//     openModal();

//     setBtnCoordenates({
//       left: Math.abs(e.target.getBoundingClientRect().left - 100),
//     });
//   }

//   return (
//     <button className="select-btn" onClick={handleBtnClick}>
//       <ion-icon name={iconName}></ion-icon>
//       <Modal
//         classes="select-btn-modal"
//         isClosed={isClosed}
//         handleModalClose={closeModal}
//         styles={{
//           left: btnCoordenates.left,
//         }}
//       >
//         {children}
//       </Modal>
//     </button>
//   );
// }

type SelectBtnType = {
  iconName: string;
  listOfOptions: Array<string>;
  optionSelected: string;
  handleSelect: (option: string) => void;
};

export function SelectBtn({
  iconName,
  listOfOptions,
  optionSelected,
  handleSelect,
}: SelectBtnType) {
  const modal = useModal();

  const handleButtonClick = () => {
    modal.openModal();
    modal.insertContent(
      <ul className="select-list">
        {listOfOptions.map((option, i) => (
          <li
            key={i}
            className={option === optionSelected ? "select-list__active" : ""}
            // onClick={handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <button onClick={handleButtonClick} className="select-btn">
      <ion-icon name={iconName}></ion-icon>
    </button>
  );
}
