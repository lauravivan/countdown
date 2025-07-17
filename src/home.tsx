import useEvent from "@/hooks/useEvent";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import useView from "@/hooks/useView";
import useFilter from "@/hooks/useFilter";
import useSort from "@/hooks/useSort";
import useTheme from "@/hooks/useTheme";
import { Modal } from "@/components/Modal";
import useModal from "@/hooks/useModal";
import { FILTER_OPTIONS, SORT_OPTIONS } from "./util/constants";
import { useState } from "react";
import { getColors } from "./util/color";
import { createPortal } from "react-dom";
import { BsPlusLg } from "react-icons/bs";

function ModalContent({
  options,
  optionSelected,
  handleSelect,
}: {
  options: string[];
  optionSelected: string;
  handleSelect: (option: string) => void;
}) {
  return (
    <ul className="select-list">
      {options.map((option, i) => {
        return (
          <li
            key={i}
            className={`${
              option === optionSelected ? " select-list__active" : ""
            } select-list__option`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
}

export default function Homepage() {
  const {
    events,
    createEvent,
    updateEventDesc,
    deleteEvent,
    updateEventDate,
    updateEventColor,
  } = useEvent();
  const { view, toggleView } = useView();
  const { filter, selectFilter } = useFilter();
  const { selectSort, sort } = useSort();
  const { theme, toggleTheme } = useTheme();
  const {
    closeModal,
    isOpen,
    openModal,
    handleTitle,
    contentType,
    title: modalTitle,
  } = useModal();
  const [eventId, setEventId] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const datePicked = e.target.value;
    updateEventDate(eventId, datePicked);
  };

  const ColorsAvailable = () =>
    getColors().map((color, index) => (
      <span
        key={index}
        className={`color-circle color-circle--${color}`}
        onClick={updateEventColor.bind(self, eventId, color)}
      ></span>
    ));

  return (
    <div className={`${theme === "moon" ? "dark" : "light"}`}>
      <div className="homepage">
        <Header
          toggleTheme={toggleTheme}
          toggleView={toggleView}
          view={view}
          theme={theme}
          openModal={openModal}
        />
        <main>
          <div className={`cards-view-${view} cards`}>
            <div
              className="cards__add-event"
              style={{ textAlign: "center" }}
              onClick={createEvent}
              aria-label="Adicionar evento"
            >
              <BsPlusLg />
            </div>
            {events.map((event: EventType) => (
              <Card
                event={event}
                key={event.id}
                updateEventDesc={updateEventDesc}
                deleteEvent={deleteEvent}
                handleEventId={(eventId: string) => setEventId(eventId)}
                openModal={openModal}
              />
            ))}
          </div>
        </main>
      </div>
      {createPortal(
        <Modal
          closeModal={closeModal}
          title={contentType === "filter" ? "Filter" : "Sort"}
          isOpen={isOpen}
        >
          {contentType === "filter" && (
            <ModalContent
              optionSelected={filter}
              options={FILTER_OPTIONS}
              handleSelect={selectFilter}
            />
          )}
          {contentType === "sort" && (
            <ModalContent
              optionSelected={sort}
              options={SORT_OPTIONS}
              handleSelect={selectSort}
            />
          )}
          {contentType === "card" && (
            <form className="card-date-update" onSubmit={handleFormSubmit}>
              <label className="card-date-update__date">
                New date:
                <input
                  type="date"
                  name="card-date"
                  id="card-date"
                  onChange={handleDate}
                />
              </label>
              <div className="card-date-update__colors">
                <span>Pick a color: </span>
                <div className="card-date-update__colors__colors">
                  <ColorsAvailable />
                </div>
              </div>
            </form>
          )}
        </Modal>,
        document.getElementById("root")!
      )}
    </div>
  );
}
