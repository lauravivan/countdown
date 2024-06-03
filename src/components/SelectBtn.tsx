// /* eslint-disable react/prop-types */
// import Modal from "@/components/Modal/index.jsx";
// import useModal from "@/hooks/useModal";
// import "@/components/SelectBtn/index.css";
// import { useState } from "react";

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
};

export function SelectBtn({ iconName }: SelectBtnType) {
  return (
    <button>
      <ion-icon name={iconName}></ion-icon>
    </button>
  );
}
