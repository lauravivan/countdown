import { extractDateFromUTCString, getCountingOfDays } from "@/util/date";
import { useMemo, useState } from "react";
import { ModalContentType } from "@/types/modal";
import { BsCheckAll } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

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
    () => extractDateFromUTCString(event.date),
    [event.date]
  );

  const handleMouseOver = () => {
    setIsCardHover(true);
  };

  const handleMouseLeave = () => {
    setIsCardHover(false);
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <div>
          <form onSubmit={handleFormSubmit}>
            <textarea
              name="card-desc"
              id={event.id}
              className="desc"
              value={event.desc}
              placeholder={event.desc}
              autoComplete="off"
              onChange={handleDesc}
            />
          </form>
          <span>{countDateExtense}</span>
        </div>
        <div className="count" onClick={handleClick}>
          <span>{countOfDays}</span>
        </div>
      </div>
      {isCardHover && (
        <button
          type="button"
          className="card__check"
          onClick={handleDelete}
          aria-label="Remover evento"
        >
          <BsCheckAll />
        </button>
      )}
      {countOfDays.includes("today") && (
        <div className="card__party pulsate-bck">
          <GiPartyPopper />
        </div>
      )}
    </article>
  );
}
