import { useModal } from "@/context";
import {
  DESC_MAX_LENGTH,
  getCountingOfDays,
  getColors,
  extractDateFromUTCString,
  getFormattedDate,
} from "@/util";
import { SetStateAction, Dispatch, useState } from "react";

interface CardType {
  event: EventType;
  index: number;
  setEvents: Dispatch<SetStateAction<EventType[]>>;
}

export function Card({ event, index, setEvents }: CardType) {
  const modal = useModal();
  const [isCardHover, setIsCardHover] = useState(false);

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const desc = e.target.value;

    setEvents((prevEvents) => {
      const et = [...prevEvents];
      et[index].desc = desc;
      return et;
    });
  };

  const getColorsAvailable = () => {
    const colorsAvailable = getColors().map((color, index) => (
      <span
        key={index}
        className={`color-circle color-circle--${color}`}
        onClick={handleColorPick.bind(self, color)}
      ></span>
    ));

    return colorsAvailable;
  };

  const handleColorPick = (color: string) => {
    setEvents((prevEvents) => {
      const et = [...prevEvents];
      et[index].color = color;
      return et;
    });
  };

  const handleCardCountClick = () => {
    modal.openModal();
    modal.insertContent(
      <form className="card-date-update" onSubmit={(e) => e.preventDefault()}>
        <label className="card-date-update__date">
          New date:{" "}
          <input
            type="date"
            name="card-date"
            id={`card-date-${event.id}`}
            onChange={handleDatePick}
          />
        </label>
        <div className="card-date-update__colors">
          <span>Pick a color: </span>
          <div className="card-date-update__colors__colors">
            {getColorsAvailable()}
          </div>
        </div>
      </form>
    );
    modal.insertModalTitle(event.desc);
  };

  const handleDatePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const datePicked = e.target.value;

    setEvents((prevEvents) => {
      const et = [...prevEvents];
      et[index].date = getFormattedDate(datePicked);
      return et;
    });
  };

  const handleEventDelete = () => {
    setEvents((prevEvents) => {
      const et = [...prevEvents];
      return et.filter((e) => e.id !== event.id);
    });
  };

  return (
    <article
      className="main__card"
      style={{ backgroundColor: `#${event.color}` }}
      onMouseOver={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <div className="main__card__content">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="card-desc"
            id={event.id}
            className="main__card__content__desc"
            value={event.desc}
            placeholder={event.desc}
            maxLength={DESC_MAX_LENGTH}
            autoComplete="off"
            onChange={handleDescChange}
          />
        </form>
        <div
          className="main__card__content__count"
          onClick={handleCardCountClick}
        >
          {getCountingOfDays(event.date)}
          {isCardHover && (
            <div className="main__card__content__count__date">
              ({extractDateFromUTCString(event.date)})
            </div>
          )}
        </div>
      </div>
      {isCardHover && (
        <button
          type="button"
          className="main__card__delete"
          onClick={handleEventDelete}
        >
          <ion-icon name="close-circle"></ion-icon>
        </button>
      )}
    </article>
  );
}
