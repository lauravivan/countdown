import { useState, useEffect } from "react";
import { Card } from "./index";
import {
  getColor,
  getFilteredEvents,
  getFormattedDate,
  getSortedEvents,
} from "@/util";
import { v4 as uuidv4 } from "uuid";
import { useFilter, useSort, useView } from "@/context";

export function Main() {
  const [events, setEvents] = useState<Array<EventType>>(
    JSON.parse(localStorage.getItem("events")!) || []
  );

  const view = useView();
  const filter = useFilter();
  const sort = useSort();

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  function createEvent() {
    let color = getColor();
    const id = uuidv4();
    const date = getFormattedDate();

    if (events.length > 0) {
      const lastColor = events[events.length - 1].color;

      while (lastColor == color) {
        color = getColor();
      }
    }

    const event: EventType = {
      id: id,
      desc: "Unamed",
      color: color,
      date: date,
    };

    setEvents((prevEvents) => {
      const e = [...prevEvents];
      e.push(event);
      return e;
    });
  }

  const getFilterAndSortEvents = () => {
    const filtered = getFilteredEvents(filter.filter, events);
    const sorted = getSortedEvents(filtered, sort.sort);

    return sorted;
  };

  return (
    <main className="main">
      <div className={`main__cards-view-${view.view} main__cards`}>
        {getFilterAndSortEvents().map((event: EventType, i: number) => (
          <Card event={event} key={i} index={i} setEvents={setEvents} />
        ))}
        <div
          className="main__card main__add-event"
          style={{ textAlign: "center" }}
          onClick={() => createEvent()}
        >
          <ion-icon name="add-outline"></ion-icon>
        </div>
      </div>
    </main>
  );
}
