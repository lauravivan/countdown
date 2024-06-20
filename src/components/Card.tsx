import { useModal } from "@/context";
import {
  DESC_MAX_LENGTH,
  getCountingOfDays,
  getColors,
  extractDateFromUTCString,
  getFormattedDate,
} from "@/util";
import { SetStateAction, Dispatch } from "react";

interface CardType {
  event: EventType;
  index: number;
  setEvents: Dispatch<SetStateAction<EventType[]>>;
}

export function Card({ event, index, setEvents }: CardType) {
  const modal = useModal();

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
      <form className="card-form-date" onSubmit={(e) => e.preventDefault()}>
        <input
          type="date"
          name="card-date"
          id="card-date"
          onChange={handleDatePick}
        />
        <div className="colors">{getColorsAvailable()}</div>
      </form>
    );
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
    <article className="card" style={{ backgroundColor: `#${event.color}` }}>
      <div className="card__content">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="card-desc"
            id={event.id}
            className="card-desc"
            value={event.desc}
            placeholder={event.desc}
            maxLength={DESC_MAX_LENGTH}
            autoComplete="off"
            onChange={handleDescChange}
          />
        </form>
        <div className="card-count" onClick={handleCardCountClick}>
          {getCountingOfDays(event.date)}
          <div className="card-count__date">
            ({extractDateFromUTCString(event.date)})
          </div>
        </div>
      </div>
      <div className="card__delete" onClick={handleEventDelete}>
        <ion-icon name="trash-sharp"></ion-icon>
      </div>
    </article>
  );
}
