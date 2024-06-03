// /* eslint-disable react/prop-types */
// import "uiEl/Card/index.css";
// import { useState } from "react";
// // import { deleteEvent } from "@/data/event";
// import { DESC_MAX_LENGTH } from "@/util/validator";
// import Modal from "@/components/Modal/index.js";
// import useModal from "@/hooks/useModal";
// import { getColors } from "@/util/color";
// import { updateEvent } from "@/data/event";
// import { getCountingOfDays, getFormattedDate } from "@/util/date";
// import RemoveIcon from "uiEl/RemoveIcon/index.jsx";

// // eslint-disable-next-line react/prop-types
// export function Card({ id, desc, color, date, deleteOnClick }) {
//   const [descInEditMode, setDescInEditMode] = useState(false);
//   const [cardDesc, setCardDesc] = useState(desc);
//   const [cardColor, setCardColor] = useState(color);
//   const [cardDate, setCardDate] = useState(date);
//   const [cardCounting, setCardCounting] = useState(getCountingOfDays(date));
//   const { openModal, isClosed, closeModal } = useModal();
//   const [showRemoveIcon, setShowRemoveIcon] = useState(false);
//   const [modalCoordenates, setModalCoordenates] = useState({});

//   const colorsAvailable = getColors().map((color, index) => (
//     <span
//       key={index}
//       className={`color-circle color-circle--${color}`}
//       onClick={handleColorChange.bind(self, color)}
//     ></span>
//   ));

//   function handleDescClick(e) {
//     e.preventDefault();
//     setDescInEditMode(true);
//   }

//   function leaveDescEditMode(time, e) {
//     setTimeout(() => {
//       e.target.blur();
//       setDescInEditMode(false);
//     }, time);
//   }

//   function handleFormSubmission(e) {
//     e.preventDefault();
//     leaveDescEditMode(100, e);
//   }

//   function handleCardMouseOver() {
//     setShowRemoveIcon(true);
//   }

//   function handleCardMouseLeave() {
//     setShowRemoveIcon(false);

//     if (descInEditMode) {
//       setDescInEditMode(false);
//     }
//   }

//   function handleDescChange(e) {
//     setTimeout(() => {
//       const userVal = e.target.value;
//       updateEvent(id, "desc", userVal);
//       setCardDesc(userVal);
//     }, 100);
//   }

//   function handleDaysClick(e) {
//     e.stopPropagation();
//     openModal();
//     const eCoordenates = e.target.getBoundingClientRect();
//     const bodyCoordenates = document.body.getBoundingClientRect();

//     const CARD_HEIGHT = 300;

//     let top = Math.abs(eCoordenates.top - CARD_HEIGHT);

//     if (bodyCoordenates.top < 0) {
//       top = top + Math.abs(bodyCoordenates.top);
//     }

//     setModalCoordenates({
//       top: top,
//       left: Math.abs(eCoordenates.left),
//     });
//   }

//   function handleDatePick(e) {
//     const userVal = e.target.value;
//     let newDate = getFormattedDate(userVal);
//     updateEvent(id, "date", newDate);
//     setCardDate(newDate);
//     setCardCounting(getCountingOfDays(newDate));
//   }

//   function handleColorChange(color) {
//     updateEvent(id, "color", color);
//     setCardColor(color);
//   }

//   return (
//     <>
//       <div
//         className="card"
//         style={{ backgroundColor: `#${cardColor}` }}
//         onMouseOver={handleCardMouseOver}
//         onMouseLeave={handleCardMouseLeave}
//       >
//         <div className="card-desc-wrapper">
//           {descInEditMode && (
//             <form onSubmit={handleFormSubmission}>
//               <input
//                 name="card-desc"
//                 id="card-desc"
//                 className="card-desc"
//                 placeholder={cardDesc}
//                 onKeyDown={handleDescChange}
//                 maxLength={DESC_MAX_LENGTH}
//                 autoComplete="off"
//               />
//             </form>
//           )}
//           {!descInEditMode && (
//             <div className="card-desc" onClick={handleDescClick}>
//               {cardDesc}
//             </div>
//           )}
//           <div className="card-count" onClick={handleDaysClick}>
//             {cardCounting}
//             {showRemoveIcon && (
//               <div className="card-count-date">({cardDate})</div>
//             )}
//           </div>
//         </div>
//         {showRemoveIcon && (
//           <RemoveIcon
//             classes={`${showRemoveIcon ? "card-hover" : "card-unhover"}`}
//             onClick={deleteOnClick}
//           />
//         )}
//       </div>
//       <Modal
//         isClosed={isClosed}
//         styles={{
//           top: modalCoordenates.top,
//           left: modalCoordenates.left,
//         }}
//         handleModalClose={closeModal}
//       >
//         <form className="card-form-date" onSubmit={handleFormSubmission}>
//           <input
//             type="date"
//             name="card-date"
//             id="card-date"
//             onChange={handleDatePick}
//           />
//           <div className="colors">{colorsAvailable}</div>
//         </form>
//       </Modal>
//     </>
//   );
// }
