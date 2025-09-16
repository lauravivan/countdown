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
import { createPortal } from "react-dom";
import { BsPlusLg } from "react-icons/bs";
import { getColors } from "./util/color/getColors";
import { FilterType } from "./types/filter";
import { SortType } from "./types/sort";

export default function Homepage() {
  const { view, toggleView } = useView();
  const { filter, selectFilter } = useFilter();
  const { selectSort, sort } = useSort();
  const { theme, toggleTheme } = useTheme();
  const { closeModal, isOpen, openModal, contentType, handleTitle, title } =
    useModal();
  const [eventId, setEventId] = useState("");
  const {
    events,
    createEvent,
    updateEventDesc,
    deleteEvent,
    updateEventDate,
    updateEventColor,
    handleSearch,
    search,
  } = useEvent({ filter, sort });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const datePicked = e.target.value;
    updateEventDate(eventId, new Date(datePicked));
  };

  const ColorsAvailable = () =>
    getColors().map((color) => (
      <span
        key={color}
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
          handleTitle={handleTitle}
          handleSearch={handleSearch}
        />
        <main>
          <div className={`cards-view-${view} cards`}>
            {!search && (
              <div
                className="cards__add-event"
                style={{ textAlign: "center" }}
                onClick={createEvent}
                aria-label="Adicionar evento"
              >
                <BsPlusLg />
              </div>
            )}

            {events.length > 0 &&
              events.map((event: EventType) => (
                <Card
                  event={event}
                  key={event.id}
                  updateEventDesc={updateEventDesc}
                  deleteEvent={deleteEvent}
                  handleEventId={(eventId: string) => setEventId(eventId)}
                  openModal={openModal}
                  handleTitle={handleTitle}
                />
              ))}
          </div>
          {search && events.length === 0 && (
            <div>Sorry, we couldn't find any results for you research</div>
          )}
        </main>
      </div>
      {createPortal(
        <Modal closeModal={closeModal} title={title} isOpen={isOpen}>
          {contentType === "filter" && (
            <ul className="select-list">
              {FILTER_OPTIONS.map((option: FilterType, i) => {
                return (
                  <li
                    key={i}
                    className={`${
                      option === filter ? " select-list__active" : ""
                    } select-list__option`}
                    onClick={() => selectFilter(option)}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          )}
          {contentType === "sort" && (
            <ul className="select-list">
              {SORT_OPTIONS.map((option: SortType, i) => {
                return (
                  <li
                    key={i}
                    className={`${
                      option === sort ? " select-list__active" : ""
                    } select-list__option`}
                    onClick={() => selectSort(option)}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          )}
          {contentType === "card" && (
            <form className="card-date-update" onSubmit={handleFormSubmit}>
              <label className="card-date-update__date">
                Pick a date:
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
