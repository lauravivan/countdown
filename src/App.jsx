import "@/App.css";
import ToggleBtn from "uiEl/ToggleBtn/index";
import SelectBtn from "@/components/SelectBtn/index.jsx";
import Card from "uiEl/Card/index.jsx";
import "@/index.css";
import { getEvents, createEvent, deleteEvent } from "@/data/event";
import { useState, useEffect } from "react";
import { filterOptions, sortOptions } from "@/util/store";
import { getFilteredEvents } from "@/util/filter";
import { getSortedEvents } from "@/util/sort";

function App() {
  const [filterSelected, setFilterSelected] = useState(
    localStorage.getItem("filterApplied") || filterOptions[0]
  );
  const [sortSelected, setSortSelected] = useState(
    localStorage.getItem("sortApplied") || sortOptions[0]
  );
  const [events, setEvents] = useState(
    getSortedEvents(getFilteredEvents(filterSelected), sortSelected)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function updateEvents() {
    setTimeout(() => {
      setEvents(
        getSortedEvents(getFilteredEvents(filterSelected), sortSelected)
      );
    }, 200);
  }

  function addEvent() {
    createEvent();
    updateEvents();
  }

  function handleEventDeletion(id) {
    deleteEvent(id);
    updateEvents();
  }

  function handleFilterSelected(filter, e) {
    e.stopPropagation();
    setFilterSelected(filter);
    setEvents(getFilteredEvents(filter));
    localStorage.setItem("filterApplied", filter);
  }

  function handleSortSelected(sort, e) {
    e.stopPropagation();
    setSortSelected(sort);
    setEvents(getSortedEvents(getFilteredEvents(filterSelected), sort));
    localStorage.setItem("sortApplied", sort);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    localStorage.setItem("filterOptions", JSON.stringify(filterOptions));
    localStorage.setItem("sortOptions", JSON.stringify(sortOptions));

    if (navigator.maxTouchPoints == 0) {
      setIsMenuOpen(true);
    }
  }, []);

  return (
    <div className="countdown">
      <header>
        <ToggleBtn
          storeName="theme"
          defaultIcon="sunny-sharp"
          toggleIcon="moon-sharp"
          toggleClass="dark"
        />

        <h1 className="page-title">Countdown</h1>

        <button className="button menu-mobile" onClick={toggleMenu}>
          <ion-icon name="menu-sharp"></ion-icon>
        </button>

        {isMenuOpen && (
          <div className="menu">
            <ToggleBtn
              storeName="cardsView"
              defaultIcon="grid-sharp"
              toggleIcon="list-sharp"
              toggleClass="list-view"
            />
            <SelectBtn iconName="filter-sharp">
              <ul>
                {filterOptions.map((option) => (
                  <li
                    key={option}
                    onClick={handleFilterSelected.bind(self, option)}
                    className={filterSelected == option ? "active" : ""}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </SelectBtn>
            <SelectBtn iconName="swap-vertical-sharp">
              <ul>
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    onClick={handleSortSelected.bind(self, option)}
                    className={sortSelected == option ? "active" : ""}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </SelectBtn>
          </div>
        )}
      </header>
      <main>
        <div>
          {events.map((event) => (
            <Card
              color={event.color}
              desc={event.desc}
              key={event.id}
              id={event.id}
              date={event.date}
              deleteOnClick={handleEventDeletion.bind(self, event.id)}
            />
          ))}
          <div
            className="card card-add"
            style={{ textAlign: "center" }}
            onClick={addEvent}
          >
            <div>
              <ion-icon name="add-outline"></ion-icon>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
