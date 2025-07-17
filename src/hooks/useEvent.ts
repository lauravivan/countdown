import { getFormattedDate } from "@/util/date";
import { getDrawnColor } from "@/util/color";
import { getStoredEvents } from "@/util/storage";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useEvent() {
  const [events, setEvents] = useState<Array<EventType>>(() =>
    getStoredEvents()
  );

  const createEvent = () => {
    const id = uuidv4();
    const date = getFormattedDate();

    const drawnColor =
      events?.length > 0
        ? getDrawnColor(events[events.length - 1].color)
        : getDrawnColor("");

    const event: EventType = {
      id: id,
      desc: "Unamed",
      color: drawnColor,
      date: date,
    };

    setEvents((prevEvents) => {
      const e = [...prevEvents];
      e.push(event);
      return e;
    });
  };

  const updateEventDesc = (id: string, newDesc: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];

      for (const e of prevEventsCopy) {
        if (e.id === id) {
          e.desc = newDesc;
        }
      }

      return prevEventsCopy;
    });
  };

  const updateEventColor = (id: string, newColor: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];

      for (const e of prevEventsCopy) {
        if (e.id === id) {
          e.color = newColor;
        }
      }

      return prevEventsCopy;
    });
  };

  const updateEventDate = (id: string, newDate: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];

      for (const e of prevEventsCopy) {
        if (e.id === id) {
          e.date = getFormattedDate(newDate);
        }
      }
      return prevEventsCopy;
    });
  };

  const deleteEvent = (id: string) => {
    setEvents((prevEvents) => {
      const prevEventsCopy = [...prevEvents];
      return prevEventsCopy.filter((e) => e.id !== id);
    });
  };

  // const getFilterAndSortEvents = () => {
  //   const filtered = getFilteredEvents(filter.filter, events);
  //   const sorted = getSortedEvents(filtered, sort.sort);

  //   return sorted;
  // };

  return {
    events,
    createEvent,
    updateEventDesc,
    updateEventColor,
    updateEventDate,
    deleteEvent,
  };
}
