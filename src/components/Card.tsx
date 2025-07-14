import { extractDateFromUTCString, getCountingOfDays } from "@/util/date";
import { DESC_MAX_LENGTH } from "@/util/constants";
import { useMemo, useState } from "react";
import { ModalContentType } from "@/types/modal";

interface CardType {
  event: EventType;
  updateEventDesc: (id: string, newDesc: string) => void;
  deleteEvent: (id: string) => void;
  openModal: (type: ModalContentType) => void;
  handleEventId: (id: string) => void;
}

export function Card({
  event,
  updateEventDesc,
  deleteEvent,
  openModal,
  handleEventId,
}: CardType) {
  const [isCardHover, setIsCardHover] = useState(false);
  const countOfDays = useMemo(
    () => getCountingOfDays(event.date),
    [event.date]
  );
  const countDateExtense = useMemo(
    () => `(${extractDateFromUTCString(event.date)})`,
    [event.date]
  );

  // const getColorsAvailable = () => {
  //   const colorsAvailable = getColors().map((color, index) => (
  //     <span
  //       key={index}
  //       className={`color-circle color-circle--${color}`}
  //       onClick={handleColorPick.bind(self, color)}
  //     ></span>
  //   ));

  //   return colorsAvailable;
  // };

  const handleMouseOver = () => {
    setIsCardHover(true);
  };

  const handleMouseLeave = () => {
    setIsCardHover(false);
  };

  const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDesc = e.target.value;
    updateEventDesc(event.id, newDesc);
  };

  const handleDelete = () => {
    deleteEvent(event.id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    openModal("card");
    handleEventId(event.id);
  };

  return (
    <article
      className="card"
      style={{ backgroundColor: `#${event.color}` }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card__content">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="card-desc"
            id={event.id}
            className="card__content__desc"
            value={event.desc}
            placeholder={event.desc}
            maxLength={DESC_MAX_LENGTH}
            autoComplete="off"
            onChange={handleDesc}
          />
        </form>
        <div className="card__content__count" onClick={handleClick}>
          <span>{countOfDays}</span>
          {isCardHover && <span>{countDateExtense}</span>}
        </div>
      </div>
      {isCardHover && (
        <button
          type="button"
          className="card__delete"
          onClick={handleDelete}
          aria-label="Remover evento"
        >
          <ion-icon name="close-circle"></ion-icon>
        </button>
      )}
    </article>
  );
}
